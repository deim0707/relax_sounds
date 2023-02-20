import React from 'react';
import useGlobalAudioContext from "src/context/useGlobalAudioContext";
import style from './header.module.css'


// todo тут надо поработать с текстом/кнопками. блокировать взаимодействие если надо. менять текст если надо
function Header() {
    const {
        isPauseAll,
        stopAll, pauseAll, randomAll,
    } = useGlobalAudioContext();


    const pauseText = isPauseAll ? 'Play again' : 'Pause all';
    return (
        <header>
            <button
                className={style.button}
                onClick={pauseAll}
            >
                {pauseText}
            </button>
            <button
                className={style.button}
                onClick={stopAll}
            >
                Stop all
            </button>
            <button
                className={style.button}
                onClick={randomAll}
            >
                Go random!
            </button>
        </header>
    );
}

export default Header;


