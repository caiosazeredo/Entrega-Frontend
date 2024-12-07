import { useState } from "react";
import {
  GameContainer,
  GameTitle,
  GameBoyBody,
  ScreenDisplay,
  PixelButtonRow,
  PixelButton,
  PixelButtonReset,
} from "./styles";

function App() {
  const [score, setScore] = useState(0);

  const handleIncrease = () => setScore((prevScore) => prevScore + 1);
  const handleDecrease = () => setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  const handleRestart = () => setScore(0);

  return (
    <GameContainer>
      <GameTitle>🏆 Placar Retro 🏆</GameTitle>
      <GameBoyBody>
        <ScreenDisplay>{String(score).padStart(3, "0")}</ScreenDisplay>

        <PixelButtonRow>
          <PixelButton onClick={handleDecrease} disabled={score === 0}>
            -
          </PixelButton>
          <PixelButtonReset onClick={handleRestart}>Reiniciar</PixelButtonReset>
          <PixelButton onClick={handleIncrease}>+</PixelButton>
        </PixelButtonRow>
        
      </GameBoyBody>
    </GameContainer>
  );
}

export default App;
