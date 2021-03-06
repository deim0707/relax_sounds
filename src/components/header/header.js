import React, {useCallback} from 'react';
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {pauseAll, random, stopAll} from "../../redux/actions";


function Header() {

    const dispatch = useDispatch();
    const isPause = useSelector((state) => state.pauseAll);


    const pause = useCallback(()=>{
        dispatch(pauseAll())
    }, [dispatch]);


    return (
        <div className="header container">
            <button className='btn button' onClick={pause}>
                {/*Pause all*/}
                {isPause ? 'Play again' : 'Pause all'}
            </button>
            <button className='btn button' onClick={() => dispatch(stopAll(true))}>Stop all</button>
            <button className='btn button' onClick={() => dispatch(random(true))}>Random</button>
        </div>
    );
}

export default Header;


