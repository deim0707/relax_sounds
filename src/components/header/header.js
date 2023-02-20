import React from 'react';
import style from './header.module.css'
import useGlobalAudioContext from "src/context/useGlobalAudioContext";


function Header() {
    const {
        isStopAllValue, setIsStopAll,
        isPauseAllValue, seIsPauseAll,
        isRandomAllValue, setIsRandomAll
    } = useGlobalAudioContext();

    const pauseAllSounds = () => {
        seIsPauseAll(!isPauseAllValue);
        setIsStopAll(false);
    };
    const stopAllSounds = () => {
        setIsStopAll(true);
        setIsRandomAll(false);
    };
    const randomSounds = () => {
        setIsRandomAll(true);
        setIsStopAll(false);
    };


    const pauseText = isPauseAllValue ? 'Play again' : 'Pause all';
    return (
        <header>
            <button
                className={style.button}
                onClick={pauseAllSounds}
            >
                {pauseText}
            </button>
            <button
                className={style.button}
                onClick={stopAllSounds}
            >
                Stop all
            </button>
            <button
                className={style.button}
                onClick={randomSounds}
            >
                Go random!
            </button>
        </header>
    );
}

export default Header;


