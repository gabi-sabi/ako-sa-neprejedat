import { useState } from 'react';
import { gameData } from './gameData';
import { isWithinDifferenceBoxes } from './gameLogic';

const GameImage = ({ src, onMouseDown, foundDifferences }) => {
  console.log(foundDifferences);
  return (
    <div className="relative">
      <img src={src} onMouseDown={onMouseDown} />

      {foundDifferences?.map((difference) => (
        <div
          key={`${difference.x}-${difference.y}`}
          className="bg-light-green absolute bg-opacity-50 border border-green-700 rounded-lg"
          style={{
            width: `${difference.w}px`,
            height: `${difference.h}px`,
            top: `${difference.y}px`,
            left: `${difference.x}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

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
      <GameImage
        src={currentGameState.file1}
        onMouseDown={handleImageClick}
        foundDifferences={found}
      />
      <GameImage
        src={currentGameState.file2}
        onMouseDown={handleImageClick}
        foundDifferences={found}
      />
    </div>
  );
};
