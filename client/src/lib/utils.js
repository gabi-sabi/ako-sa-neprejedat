import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// get next four timeslots for Monday and Thursday at 19:00
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

export async function callBackend({ method = 'POST', url, payload, headers}) {
  const backendUrl = import.meta.env.BACKEND_BASE_URL ? `${import.meta.env.BACKEND_BASE_URL}/${url}` : `http://localhost:3500/${url}`
  try {
    const { data, status } = await axios({
      method,
      url: backendUrl,
      data: payload,
      headers: headers || { "Content-Type": "application/json" }
    });
    // back-end returns response {} with data {}, in those data, there is the message which is {data: string}, thus response.data
    if (status != 200 && status != 201)
    {
      throw new Error(`response status is ${status}`);
    }
    return data;
  }
  
  catch (error)
  {
    return {
      error: true,
      message: error.message
    }
  }
}
