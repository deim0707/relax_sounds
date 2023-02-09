import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {random, stopAll} from "src/redux/actions";
import useSound from "use-sound";
import itemsConfig from "./itemsConfig";
import style  from './soundItem.module.css'


// todo затипизировать бы тут прос с типом звука
function SoundItem({type}) {
    const dispatch = useDispatch();
    const pauseAll = useSelector((state) => state.pauseAll);
    const isRandom = useSelector((state) => state.random);
    const isStopped = useSelector((state) => state.stopAll);


    const item = itemsConfig[type]; //here sound and image

    const [volume, setVolume] = useState(0.7);
    const [playing, setPlaying] = useState(false);

    const [play, {pause}] = useSound(
        item.sound,
        {
            volume: volume,
            loop: true,
        }
    );

    //fixme убрать ифы внутри юзЭффекта. что за дичь
    //pause all
    useEffect(() => {
        if (pauseAll && playing) pause();
        if (!pauseAll && playing) play();
    }, [pauseAll, playing]);

    //random
    useEffect(() => {
        if (isRandom && Math.random() > 0.5) {
            play();
            setPlaying(true);
            dispatch(random(false))
        }
        if (isRandom && Math.random() < 0.5) {
            pause();
            setPlaying(false);
            dispatch(random(false))
        }
    }, [isRandom]);

    //stoped all
    useEffect(() => {
        if (isStopped) {
            pause();
            setPlaying(false);
            dispatch(stopAll(false))
        }
    }, [isStopped]);

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
            className={style.volumeRange}
            id="formControlRange"
            min='10'
            max='100'
            defaultValue='70'
            onChange={(e) => {
                setVolume((e.target.value / 100))
            }}
        />
    </form>;

    const Icon = item.icon;
    return (
        <div
            className={style.soundItem}
            style={playing ? {fill: 'green', color: 'green'} : {fill: 'black', color: 'black'}}
        >
            <div onClick={playPauseSound}>
                <Icon />
            </div>

            {playing ? form : null}
        </div>

    );
}

export default SoundItem;
