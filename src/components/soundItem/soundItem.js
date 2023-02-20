import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {random, stopAll} from "src/redux/actions";
import useSound from "use-sound";
import style from './soundItem.module.css'


const playingItemStyles = {fill: 'green', color: 'green'};
const notPlayingItemStyles = {fill: 'black', color: 'black'};

// todo затипизировать бы тут прос с типом звука
function SoundItem({Icon, sound}) {
    const dispatch = useDispatch();
    const pauseAll = useSelector((state) => state.pauseAll);
    const isRandom = useSelector((state) => state.random);
    const isStopped = useSelector((state) => state.stopAll);


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
        if (pauseAll && isPlaying) pause();
        if (!pauseAll && isPlaying) play();
    }, [pauseAll, isPlaying]);

    //random
    useEffect(() => {
        const randomNumber = Math.random();
        if (isRandom && randomNumber > 0.5) {
            play();
            setIsPlaying(true);
            dispatch(random(false))
        }
        if (isRandom && randomNumber < 0.5) {
            pause();
            setIsPlaying(false);
            dispatch(random(false))
        }
    }, [isRandom]);

    //stoped all
    useEffect(() => {
        if (isStopped) {
            pause();
            setIsPlaying(false);
            dispatch(stopAll(false))
        }
    }, [isStopped]);

    function playPauseSound() {
        if (isPlaying) {
            setIsPlaying(false);
            pause()
        } else {
            setIsPlaying(true);
            play()
        }

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
