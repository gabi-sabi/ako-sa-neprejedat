export const isWithinDifferenceBoxes = (clickX, clickY, differences) => {
  console.log(clickX, clickY, differences);
  for (const difference of differences) {
    const { x, y, w, h } = difference;
    if (clickX > x && clickX < x + w && clickY > y && clickY < y + h) {
      return difference;
    }
  }
};
