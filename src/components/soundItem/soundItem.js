import React, {useState} from 'react';
import './soundItem.css'
import useSound from "use-sound";

import forestSound from '../../audio/02 - Starlight.mp3';
import rainSound from '../../audio/03 - Supermassive Black Hole.mp3';
import thunderstormSound from '../../audio/05-Coma.mp3';

const forestImg = <svg className='soundItem' xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                       viewBox="0 0 56 56"><title>Forest</title>
    <g fill="none" fillRule="evenodd">
        <path fill="currentColor" fillRule="nonzero"
              d="M14 50h2v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5H1a1 1 0 0 1-.868-1.496L3.277 40H2a1 1 0 0 1-.848-1.53L5.196 32H5a1 1 0 0 1-.868-1.496L7.277 25H7a1 1 0 0 1-.878-1.479l6-11a1 1 0 0 1 1.752-.007l3.895 7.011-1.188 1.98-3.573-6.431L8.685 23H9a1 1 0 0 1 .868 1.496L6.723 30H7a1 1 0 0 1 .848 1.53L3.804 38H5a1 1 0 0 1 .868 1.496L2.723 45H10c.294 0 .558.127.74.328l-.516 1.137A2.499 2.499 0 0 0 11 49.502V51h3v-1zm24.23-30.475l3.896-7.01a1 1 0 0 1 1.752.006l6 11A1 1 0 0 1 49 25h-.277l3.145 5.504A1 1 0 0 1 51 32h-.196l4.044 6.47A1 1 0 0 1 54 40h-1.277l3.145 5.504A1 1 0 0 1 55 47h-8v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2h2v1h3v-1.498a2.499 2.499 0 0 0 .776-3.037l-.517-1.137A.997.997 0 0 1 46 45h7.277l-3.145-5.504A1 1 0 0 1 51 38h1.196l-4.044-6.47A1 1 0 0 1 49 30h.277l-3.145-5.504A1 1 0 0 1 47 23h.315l-4.323-7.926-3.573 6.431-1.188-1.98z"></path>
        <path fill="currentColor" fillRule="nonzero"
              d="M33 49v5.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5V49H12.5a1.5 1.5 0 0 1-1.366-2.12L15.17 38H13.5a1.5 1.5 0 0 1-1.286-2.272L16.85 28H16.5a1.5 1.5 0 0 1-1.286-2.272L19.85 18H19.5a1.5 1.5 0 0 1-1.305-2.24l8.5-15a1.5 1.5 0 0 1 2.61 0l8.5 15A1.5 1.5 0 0 1 36.5 18h-.35l4.636 7.728A1.5 1.5 0 0 1 39.5 28h-.35l4.636 7.728A1.5 1.5 0 0 1 42.5 38h-1.67l4.036 8.88A1.5 1.5 0 0 1 43.5 49H33zm-2.56-2.56c.27-.272.646-.44 1.06-.44h9.67l-4.036-8.88A1.5 1.5 0 0 1 38.5 35h1.35l-4.636-7.728A1.5 1.5 0 0 1 36.5 25h.35l-4.636-7.728A1.5 1.5 0 0 1 33.5 15h.426L28 4.543 22.074 15h.426a1.5 1.5 0 0 1 1.286 2.272L19.15 25h.351a1.5 1.5 0 0 1 1.286 2.272L16.15 35H17.5a1.5 1.5 0 0 1 1.366 2.12L14.83 46h9.67a1.5 1.5 0 0 1 1.5 1.5V53h4v-5.5c0-.414.168-.79.44-1.06z"></path>
        <path d="M0 0h56v56H0z"></path>
    </g>
</svg>;
const rainImg = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><title>Rain</title>
    <g fill="none" fillRule="evenodd">
        <path fill="currentColor" fillRule="nonzero"
              d="M15.676 11.446l-.518.745-.9-.113A10.113 10.113 0 0 0 13 12C7.477 12 3 16.477 3 22s4.477 10 10 10a9.965 9.965 0 0 0 3.814-.753l.841-.347.697.586A14.931 14.931 0 0 0 28 35c3.581 0 6.964-1.257 9.648-3.514l.697-.586.841.347A9.965 9.965 0 0 0 43 32c5.523 0 10-4.477 10-10s-4.477-10-10-10c-.424 0-.843.026-1.258.078l-.9.113-.518-.745A14.979 14.979 0 0 0 28 5a14.979 14.979 0 0 0-12.324 6.446zM28 2c5.666 0 10.89 2.639 14.265 7.02.244-.013.49-.02.735-.02 7.18 0 13 5.82 13 13s-5.82 13-13 13c-1.414 0-2.8-.227-4.113-.664A17.926 17.926 0 0 1 28 38a17.926 17.926 0 0 1-10.887-3.664A12.988 12.988 0 0 1 13 35C5.82 35 0 29.18 0 22S5.82 9 13 9c.246 0 .491.007.735.02A17.972 17.972 0 0 1 28 2zM12.02 38.253a1.5 1.5 0 1 1 2.96.494l-1 6a1.5 1.5 0 1 1-2.96-.494l1-6zm13 9a1.5 1.5 0 1 1 2.96.494l-1 6a1.5 1.5 0 1 1-2.96-.494l1-6zm14-6a1.5 1.5 0 1 1 2.96.494l-1 6a1.5 1.5 0 1 1-2.96-.494l1-6z"></path>
        <path d="M0 0h56v56H0z"></path>
    </g>
</svg>;

const thunderstormImg = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
    <title>Thunderstorm</title>
    <g fill="none" fillRule="evenodd">
        <path fill="currentColor" fillRule="nonzero"
              d="M15.676 11.446l-.518.745-.9-.113A10.113 10.113 0 0 0 13 12C7.477 12 3 16.477 3 22s4.477 10 10 10a9.965 9.965 0 0 0 3.814-.753l.841-.347.697.586A14.931 14.931 0 0 0 28 35c3.581 0 6.964-1.257 9.648-3.514l.697-.586.841.347A9.965 9.965 0 0 0 43 32c5.523 0 10-4.477 10-10s-4.477-10-10-10c-.424 0-.843.026-1.258.078l-.9.113-.518-.745A14.979 14.979 0 0 0 28 5a14.979 14.979 0 0 0-12.324 6.446zM28 2c5.666 0 10.89 2.639 14.265 7.02.244-.013.49-.02.735-.02 7.18 0 13 5.82 13 13s-5.82 13-13 13c-1.414 0-2.8-.227-4.113-.664A17.926 17.926 0 0 1 28 38a17.926 17.926 0 0 1-10.887-3.664A12.988 12.988 0 0 1 13 35C5.82 35 0 29.18 0 22S5.82 9 13 9c.246 0 .491.007.735.02A17.972 17.972 0 0 1 28 2z"></path>
        <path fill="currentColor" fillRule="nonzero"
              d="M24.6 42.7a1.5 1.5 0 0 1-.271-2.137l4-5a1.5 1.5 0 0 1 2.342 1.874l-3.033 3.792L30.4 43.3a1.5 1.5 0 0 1 .32 2.072l-5 7a1.5 1.5 0 1 1-2.44-1.744l4.148-5.807L24.6 42.7z"></path>
        <path d="M0 0h56v56H0z"></path>
    </g>
</svg>;

const obj = {
    forest: {img: forestImg, sound: forestSound},
    rain: {img: rainImg, sound: rainSound},
    thunderstorm: {img: thunderstormImg, sound: thunderstormSound}
}


function SoundItem({img, sound, type}) {
    const [volume, setVolume] = useState(0.7)
    const item = obj[type];
    const [play, {pause, isPlaying}] = useSound(
        item.sound,
        {volume: volume}
    );

    function goSound() {
        isPlaying ? pause() : play()
    }

    return (
        <div className="sound-item" onClick={goSound}>
            {item.img}
        </div>
    );
}

export default SoundItem;
