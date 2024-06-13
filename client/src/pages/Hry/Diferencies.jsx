import { useCallback, useEffect, useMemo, useState } from 'react';
import { gameData } from './gameData';
import { isWithinDifferenceBoxes } from './gameLogic';
import { Button } from '@/components/ui/Button';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const GameImage = ({ src, onMouseDown, foundDifferences }) => {
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
    }
  });

  return (
    <div>
      {found.length === currentGameState.differences.length && (
        <Confetti width={width} height={height} recycle={false} />
      )}
      <div className="flex flex-col justify-center items-center md:flex-row">
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
      <div className=" flex justify-between py-6 px-6 md:px-16 lg:px-32">
        <span className="text-white font-bold text-xl">
          nájdených {found.length}/{currentGameState.differences.length}
        </span>
        {/* TODO(Gabika): finalise text here */}
        <span className="text-white">Nájdi všetky rozdiely</span>
        <Button
          disabled={found.length < currentGameState.differences.length}
          onClick={goToNextGame}
          className="text-xl"
        >
          Ďalší
        </Button>
      </div>
    </div>
  );
};
