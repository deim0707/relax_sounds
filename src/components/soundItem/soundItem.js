import React, {useState} from 'react';
import './soundItem.css'
import useSound from "use-sound";

import items from "./items";


function SoundItem({type}) {

    const item = items[type]; //here sound and image
    const [volume, setVolume] = useState(0.7);
    const [playing, setPlaying] = useState(false);
    const [play, {pause}] = useSound(
        item.sound,
        {volume: volume, loop: true}
    );


    function playPauseSound() {
        if (playing) {
            setPlaying(false);
            pause()
        } else {
            setPlaying(true);
            play()
        }

    }

    const form = <form>
        <input
            type="range"
            className="volume-range"
            id="formControlRange"
            min='10'
            max='100'
            defaultValue='70'
            onChange={(e) => {
                setVolume((e.target.value / 100))
            }}
        />
    </form>;

    return (
        <div
            className="sound-item"
            style={playing ? {fill: 'green', color: 'green'} : {fill: 'black', color: 'black'}}
        >
            <div onClick={playPauseSound}>
                {item.img}
            </div>

            {playing ? form : null}
        </div>

    );
}

export default SoundItem;
