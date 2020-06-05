import React, {useEffect, useState} from 'react';
import './soundItem.css'
import useSound from "use-sound";

import items from "./items";


function SoundItem({img, sound, type}) {
    const [volume, setVolume] = useState(7)
    const item = items[type];
    const [play, {pause, isPlaying}] = useSound(
        item.sound,
        {
            volume: volume,
            interrupt: true
        }
    );

    useEffect(()=>{
        console.log(volume)
    });

    function goSound() {
        isPlaying ? pause() : play()
    }

    return (
        <div>
            <div className="sound-item" onClick={goSound}>
                {item.img}
            </div>

            <form>
                <div className="form-group">
                    {/*<label htmlFor="formControlRange">Example Range input</label>*/}
                    <input
                        type="range"
                        className="form-control-range"
                        id="formControlRange"
                        min='10'
                        max='100'
                        defaultValue='70'
                        onChange={(e) => {
                            setVolume((e.target.value / 100))
                        }}
                    />
                </div>
            </form>
        </div>

    );
}

export default SoundItem;
