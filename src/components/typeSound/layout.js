import React from 'react';
import SoundItem from "../soundItem";
import itemsConfig from "src/components/soundItem/itemsConfig";
import style from './typeSound.module.css';


const Layout = () => {
    return (
        <main className={style.mainWrapper}>
            <div className={style.soundsWrapper}>
                {Object.entries(itemsConfig).map(([key, {icon, sound}]) => (
                    <SoundItem Icon={icon} sound={sound} key={key}/>
                ))}
            </div>
        </main>
    )
};

export default Layout;

