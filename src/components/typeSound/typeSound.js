import React from 'react';
import './typeSound.css'
import SoundItem from "../soundItem";



const TypeSound = () => {

    return (
        <div className='container typeSound-wrapper pt-5'>
            <div className="row justify-content-around pt-5">
                <SoundItem type='forest'/>
                <SoundItem type='rain'/>
                <SoundItem type='thunderstorm'/>

            </div>
        </div>
    )
}

export default TypeSound;

