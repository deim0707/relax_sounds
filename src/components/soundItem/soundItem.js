import React, {useEffect, useState} from 'react';
import useSound from "use-sound";
import useGlobalAudioContext from "src/context/useGlobalAudioContext";
import style from './soundItem.module.css'


const playingItemStyles = {fill: 'green', color: 'green'};
const notPlayingItemStyles = {fill: 'black', color: 'black'};

// todo затипизировать бы тут прос с типом звука
function SoundItem({Icon, sound}) {
    const {
        isStopAllValue, setIsStopAll,
        isPauseAllValue, seIsPauseAll,
        isRandomAllValue, setIsRandomAll
    } = useGlobalAudioContext();


    const [volume, setVolume] = useState(0.7);
    const [isPlaying, setIsPlaying] = useState(false);

    const [play, {pause}] = useSound(
        sound,
        {
            volume: volume,
            loop: true,
        }
    );

    //pause all
    useEffect(() => {
        if (isPauseAllValue && isPlaying) pause();
        if (!isPauseAllValue && isPlaying) play();
    }, [isPauseAllValue, isPlaying]);

    //random
    useEffect(() => {
        const randomNumber = Math.random();
        if (isRandomAllValue && randomNumber > 0.5) {
            play();
            setIsPlaying(true);
            setIsRandomAll(false);
        }
        if (isRandomAllValue && randomNumber < 0.5) {
            pause();
            setIsPlaying(false);
            setIsRandomAll(false);
        }
    }, [isRandomAllValue]);

    //stoped all
    useEffect(() => {
        if (isStopAllValue) {
            pause();
            setIsPlaying(false);
            setIsStopAll(false);
        }
    }, [isStopAllValue]);

    function playPauseSound() {
        if (isPlaying) {
            setIsPlaying(false);
            pause()
        } else {
            setIsPlaying(true);
            play()
        }
        setIsStopAll(false);
    }


    const changeVolume = (e) => {
        setVolume((e.target.value / 100))
    }
    const formElement = <form>
        <input
            type="range"
            className={style.volumeRange}
            id="formControlRange"
            min='10'
            max='100'
            defaultValue='70'
            onChange={changeVolume}
        />
    </form>;

    const currentItemStyles = isPlaying ? playingItemStyles : notPlayingItemStyles
    return (
        <div
            className={style.soundItem}
            style={currentItemStyles}
        >
            <div onClick={playPauseSound}>
                <Icon/>
            </div>

            {isPlaying ? formElement : null}
        </div>

    );
}

export default SoundItem;
