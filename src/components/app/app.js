import React, {useReducer} from 'react';
import GlobalAudioContext from "src/context";
import Layout from "../typeSound";
import Header from "../header";
import {globalSoundInitialState, globalSoundStateReducer} from "src/context/reducer";
import style from './app.module.css'

function App() {
    const globalAudioStateReducer = useReducer(globalSoundStateReducer, globalSoundInitialState);

    return (
        <div className={style.app}>
            <GlobalAudioContext.Provider value={globalAudioStateReducer}>
                <Header/>
                <Layout/>
            </GlobalAudioContext.Provider>
        </div>
    );
}

export default App;


// https://habr.com/ru/company/ruvds/blog/495896/
// https://online-audio-converter.com/ru/
