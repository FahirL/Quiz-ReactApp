import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">Tvoj rezultat {score} / 34 tačnih odgovora!</div>
        <button className="playBtn" onClick={playAgain}>
            Probaj ponovo!
        </button>
    </div>
);

export default Result;