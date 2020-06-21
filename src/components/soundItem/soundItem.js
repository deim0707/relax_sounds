import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {random, stopAll} from "../../redux/actions";
import useSound from "use-sound";
import './soundItem.css'
import items from "./items";

function SoundItem({type}) {
    const dispatch = useDispatch();
    const isPauseAll = useSelector((state) => state.pauseAll);
    const isRandom = useSelector((state) => state.random);
    const isStopped = useSelector((state) => state.stopAll);

    const item = items[type]; //here sound and image

    const [volume, setVolume] = useState(0.7);
    const [isPlaying, setPlaying] = useState(false);

    const [play, {pause}] = useSound(item.sound, {
        volume: volume,
        loop: true,
    });

    //pause all
    useEffect(() => {
        if (isPlaying) {
            if (isPauseAll) pause();
            else play();
        }
    }, [isPauseAll]);

    //random
    useEffect(() => {
        if (isRandom) {
            dispatch(random(false));

            if (Math.random() > 0.5) {
                playSound();
            } else {
                stopSound();
            }
        }
    }, [isRandom]);

    //stoped all
    useEffect(() => {
        if (isStopped) {
            stopSound();
            dispatch(stopAll(false));
        }
    }, [isStopped]);

    function stopSound() {
        pause();
        setPlaying(false);
    }

    function playSound() {
        play();
        setPlaying(true);
    }

    function playPauseSound() {
        if (isPlaying) {
            stopSound();
        } else {
            playSound();
        }
    }

    const volumeControl = <input
        type="range"
        className="volume-range"
        id="formControlRange"
        min='10'
        max='100'
        defaultValue='70'
        onChange={(e) => setVolume((e.target.value / 100))}
    />;

    return (
        <div className={`sound-item sound-${isPlaying ? 'on' : 'off'}`}>
            <div role="button" onClick={playPauseSound}>
                {item.img}
            </div>
            {isPlaying && volumeControl}
        </div>
    );
}

export default SoundItem;
