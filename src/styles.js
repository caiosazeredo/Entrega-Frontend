import styled from "styled-components";

export const GameContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #8ecae6, #219ebc); /* Céu retro */
  gap: 30px;
  font-family: "VT323", monospace; /* Fonte pixelada */
`;

export const GameTitle = styled.h1`
  font-size: 2rem;
  color: #ffb703; /* Amarelo vibrante */
  text-shadow: 2px 2px 4px #023047;
`;

export const GameBoyBody = styled.div`
  position: relative;
  width: 300px;
  height: 400px; /* Aumentado para mais espaço */
  background: #2a2a2a; /* Corpo do Game Boy */
  border: 12px solid #000;
  border-radius: 20px;
  padding: 20px;
  box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.5), 10px 10px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribui os elementos */
  align-items: center;
  gap: 20px;
`;

export const ScreenDisplay = styled.div`
  width: 250px;
  height: 150px;
  background: linear-gradient(to bottom, #1a1a1a, #333);
  color: #00ff00;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid #000;
  border-radius: 10px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.6);
  font-family: "VT323", monospace;
  text-shadow: 1px 1px 3px #00ff00;
`;

export const PixelButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 0 20px;

  margin-bottom: 30px;
`;

export const PixelButton = styled.button`
  background: #ffb703; /* Amarelo vibrante */
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 15px;
  border: 5px solid #000;
  border-radius: 50%; /* Botões arredondados */
  cursor: pointer;
  font-family: "VT323", monospace;
  text-shadow: 1px 1px 0px #000;
  box-shadow: 0px 5px 0px #8b4513;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 0px #8b4513;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const PixelButtonReset = styled.button`
  background: #d90429; /* Vermelho vibrante */
  color: #fff; /* Texto em branco para contraste */
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px 20px;
  border: 5px solid #000;
  border-radius: 8px; /* Botão mais quadrado */
  cursor: pointer;
  font-family: "VT323", monospace;
  text-shadow: 1px 1px 0px #000;
  box-shadow: 0px 5px 0px #8b0000; /* Sombra em vermelho escuro */
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: #ff0000; /* Vermelho mais claro ao passar o mouse */
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 0px #8b0000;
  }
`;