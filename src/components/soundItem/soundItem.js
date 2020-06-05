import React, {} from 'react';
import './soundItem.css'
import useSound from "use-sound";

function SoundItem({img, sound}) {
// React.Lazy(() => import('../../audio/02 - Starlight.mp3'))
    const [play, {stop, isPlaying}] = useSound(
        sound,
        {volume: 10.25}
    );

    function goSound() {
        isPlaying ? stop() : play()
    }
    return (
        <div className="sound-item" onClick={goSound}>
            {img}
        </div>
    );
}

export default SoundItem;
