import React from 'react';
import SoundItem from "../soundItem";
import style from './typeSound.module.css';


const Layout = () => {
    return (
        <main className={style.mainWrapper}>
                {/*types we take from  soundItem/types.js*/}
                <div className={style.soundsWrapper}>
                    <SoundItem type='forest'/>
                    <SoundItem type='rain'/>
                    <SoundItem type='thunderstorm'/>
                    <SoundItem type='wind'/>
                    <SoundItem type='train'/>
                    <SoundItem type='seaBird'/>
                    <SoundItem type='bonfire'/>
                    <SoundItem type='southForest'/>
                    <SoundItem type='bird'/>
                </div>
        </main>
    )
};

export default Layout;

