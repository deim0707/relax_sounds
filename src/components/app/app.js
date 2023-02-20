import React, {useState} from 'react';
import GlobalAudioContext from "src/context";
import Layout from "../typeSound";
import Header from "../header";
import style from './app.module.css'

function App() {
    const isStopAll = useState(false);
    const isPauseAll = useState(false);
    const isRandomAll = useState(false);
    const contextValue = {isStopAll, isPauseAll, isRandomAll};

    return (
        <div className={style.app}>
            <GlobalAudioContext.Provider value={contextValue}>
                <Header/>
                <Layout/>
            </GlobalAudioContext.Provider>
        </div>
    );
}

export default App;


// https://habr.com/ru/company/ruvds/blog/495896/
// https://online-audio-converter.com/ru/
