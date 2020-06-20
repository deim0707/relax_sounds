import React from 'react';
import './header.css'
import {useDispatch} from "react-redux";
import {pauseAll, random, stopAll} from "../../redux/actions";


function Header() {

    const dispatch = useDispatch();

    function pause() {
        dispatch(pauseAll())
    }


    return (
        <div className="header container">
            <button className='btn' onClick={pause}>Pause all</button>
            <button className='btn' onClick={() => dispatch(stopAll(true))}>Stop all</button>
            <button className='btn' onClick={() => dispatch(random(true))}>Random</button>
        </div>
    );
}

export default Header;


