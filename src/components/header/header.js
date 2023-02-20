import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pauseAll, random, stopAll} from "src/redux/actions";
import style from './header.module.css'


function Header() {

    const dispatch = useDispatch();
    const isPause = useSelector((state) => state.pauseAll);


    const pauseAllSounds = () => dispatch(pauseAll());
    const stopAllSounds = () => dispatch(stopAll(true));
    const randomSounds = () => dispatch(random(true));


    const pauseText = isPause ? 'Play again' : 'Pause all';
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
                Random
            </button>
        </header>
    );
}

export default Header;


