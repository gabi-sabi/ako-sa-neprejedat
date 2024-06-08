import { useCallback, useEffect, useMemo, useState } from 'react';
import { gameData } from './gameData';
import { isWithinDifferenceBoxes } from './gameLogic';
import { Button } from '@/components/ui/Button';
import _ from 'lodash';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

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
  const [currentGameStateIndex, setCurrentGameStateIndex] = useState(0);
  const { width, height } = useWindowSize();

  const currentGameState = useMemo(() => {
    console.log(gameData);
    return gameData[currentGameStateIndex];
  }, [currentGameStateIndex]);

  const goToNextGame = () => {
    setCurrentGameStateIndex(
      (currentIndex) => (currentIndex + 1) % gameData.length,
    );
    setFound([]);
  };

  const handleImageClick = useCallback((event) => {
    if (!currentGameState) return;

    const clickedDifference = isWithinDifferenceBoxes(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
      currentGameState.differences,
    );

    if (clickedDifference) {
      setFound([...found, clickedDifference]);
      console.log(clickedDifference);
    }
  });

  return (
    <div>
      {found.length === currentGameState.differences.length && (
        <Confetti width={width} height={height} recycle={false} />
      )}
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
      <div className="flex justify-between py-6 px-6 md:px-16 lg:px-32">
        <span>
          nalezeno {found.length}/{currentGameState.differences.length}
        </span>
        {/* TODO(Gabika): finalise text here */}
        <span>najdi vsetky rozdiely</span>
        <Button
          disabled={found.length < currentGameState.differences.length}
          onClick={goToNextGame}
        >
          dalsi
        </Button>
      </div>
    </div>
  );
};
