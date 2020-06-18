import React, {useState} from 'react';
import './soundItem.css'
import useSound from "use-sound";

import items from "./items";


function SoundItem({type}) {
    const [volume, setVolume] = useState(0.7)
    const item = items[type];
    const [play, {pause, isPlaying}] = useSound(
        item.sound,
        {volume: volume}
    );

    function playPauseSound() {
        isPlaying ? pause() : play()
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
        <div>
            <div
                className="sound-item"
                style={isPlaying ? {color: 'green'} : {color: 'black'}}
                onClick={playPauseSound}
            >
                {item.img}
            </div>

            {isPlaying ? form : null}
            {form}
        </div>
    );
}

export default SoundItem;
