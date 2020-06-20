import React from 'react';
import './typeSound.css'
import SoundItem from "../soundItem";


const TypeSound = () => {

    return (
        <div className='container typeSound-wrapper pt-5'>
            <div className="row justify-content-around pt-4">
                {/*types we take from  soundItem/types.js*/}
                <SoundItem type='forest'/>
                <SoundItem type='rain'/>
                <SoundItem type='thunderstorm'/>
            </div>
            <div className="row justify-content-around pt-4">
                <SoundItem type='wind'/>
                <SoundItem type='train'/>
                <SoundItem type='seaBird'/>
            </div>
            <div className="row justify-content-around pt-4">
                <SoundItem type='bonfire'/>
                <SoundItem type='southForest'/>
                <SoundItem type='bird'/>
            </div>
        </div>
    )
};

export default TypeSound;

