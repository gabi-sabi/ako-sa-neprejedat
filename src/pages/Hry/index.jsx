import { GameButton } from '@/components/GameButton';

export const HryPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center font-sans h-auto">
        <GameButton to="/dychacie-cvicenie" name="dychacie cvicenie">
          dychacie cvicenie
        </GameButton>
        <GameButton to="/pocitanie" name="pocitanie">
          pocitanie
        </GameButton>
        <GameButton to="/rozdiely" name="rozdiely">
          rozdiely
        </GameButton>
      </main>
    </>
  );
};
