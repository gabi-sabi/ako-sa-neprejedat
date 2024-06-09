import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getNextFourTimeslots = () => {
  const timeslots = [];
  const today = dayjs();
  const daysOfWeek = { Monday: 1, Thursday: 4 }; // dayjs uses 0 (Sunday) to 6 (Saturday)

  let dayToCheck = today;

  while (timeslots.length < 4) {
    const dayOfWeek = dayToCheck.day();

    if (dayOfWeek === daysOfWeek.Monday || dayOfWeek === daysOfWeek.Thursday) {
      const timeslot = dayToCheck
        .set('hour', 19)
        .set('minute', 0)
        .set('second', 0)
        .set('millisecond', 0);
      if (timeslot.isAfter(today)) {
        timeslots.push(timeslot.format('YYYY-MM-DD HH:mm:ss'));
      }
    }

    dayToCheck = dayToCheck.add(1, 'day');
  }

  return timeslots;
};
