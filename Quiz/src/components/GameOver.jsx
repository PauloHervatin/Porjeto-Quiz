import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/Welldone.svg";

import "./GameOver.css"

const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Fim de jogo</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas.</p>
      <img src={WellDone} alt="Fim de jogo" />
      <button>Reniciar</button>
    </div>
  );
};

export default GameOver;
