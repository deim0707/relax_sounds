import React, {useEffect, useState} from 'react';
import useSound from "use-sound";
import useGlobalAudioContext from "src/context/useGlobalAudioContext";
import style from './soundItem.module.css'


const playingItemStyles = {fill: 'green', color: 'green'};
const notPlayingItemStyles = {fill: 'black', color: 'black'};

// todo тут лишние рендеры
function SoundItem({Icon, sound}) {
    const {
        isStoppedAll, isPauseAll, isRandomAll,
        changeStopAll,
        changeRandomAll,
    } = useGlobalAudioContext();


    const [volume, setVolume] = useState(0.7);
    const [isItemPlaying, setIsItemPlaying] = useState(false);

    const [play, {pause}] = useSound(
        sound,
        {
            volume: volume,
            loop: true,
        }
    );

    //pause all
    useEffect(() => {
        if (isPauseAll && isItemPlaying) pause();
        if (!isPauseAll && isItemPlaying) play();
    }, [isPauseAll, isItemPlaying]);

    //random
    useEffect(() => {
        const randomNumber = Math.random();
        if (isRandomAll && randomNumber > 0.5) {
            play();
            setIsItemPlaying(true);
            // setIsRandomAll(false);
            changeRandomAll(false);
        }
        if (isRandomAll && randomNumber < 0.5) {
            pause();
            setIsItemPlaying(false);
            // setIsRandomAll(false);
            changeRandomAll(false);
        }
    }, [isRandomAll]);

    //stoped all
    useEffect(() => {
        if (isStoppedAll) {
            pause();
            setIsItemPlaying(false);
            // setIsStopAll(false);
            changeStopAll(false);
        }
    }, [isStoppedAll]);

    function playPauseSound() {
        if (isItemPlaying) {
            setIsItemPlaying(false);
            pause()
        } else {
            setIsItemPlaying(true);
            play()
        }
        // setIsStopAll(false);
        changeStopAll(false);
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

    const currentItemStyles = isItemPlaying ? playingItemStyles : notPlayingItemStyles
    return (
        <div
            className={style.soundItem}
            style={currentItemStyles}
        >
            <div onClick={playPauseSound}>
                <Icon/>
            </div>

            {isItemPlaying ? formElement : null}
        </div>

    );
}

export default SoundItem;
