import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pauseAll, random, stopAll} from "src/redux/actions";
import style from './header.module.css'


function Header() {

    const dispatch = useDispatch();
    const isPause = useSelector((state) => state.pauseAll);


    const pause = useCallback(()=>{
        dispatch(pauseAll())
    }, [dispatch]);


    return (
        <div>
            <button
                className={style.button}
                onClick={pause}
            >
                {/*Pause all*/}
                {isPause ? 'Play again' : 'Pause all'}
            </button>
            <button
                className={style.button}
                onClick={() => dispatch(stopAll(true))}
            >
                Stop all
            </button>
            <button
                className={style.button}
                onClick={() => dispatch(random(true))}
            >
                Random
            </button>
        </div>
    );
}

export default Header;


