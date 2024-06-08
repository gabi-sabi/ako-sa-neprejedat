import { useState } from 'react';
import { gameData } from './gameData';
import { isWithinDifferenceBoxes } from './gameLogic';

export const DiferenciesPage = () => {
  const [found, setFound] = useState([]);

  const currentGameState = gameData[0];

  const handleImageClick = (event) => {
    const clickedDifference = isWithinDifferenceBoxes(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
      currentGameState.differences,
    );

    if (clickedDifference) {
      setFound([...found, clickedDifference]);
      console.log(clickedDifference);
    }
  };
  return (
    <div className="flex justify-center">
      <img src={currentGameState.file1} onMouseDown={handleImageClick} />
      <img src={currentGameState.file2} onMouseDown={handleImageClick} />
    </div>
  );
};
