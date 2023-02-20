import React from 'react';
import Layout from "../typeSound";
import Header from "../header";
import style from './app.module.css'

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Layout/>
        </div>
    );
}

export default App;


// https://habr.com/ru/company/ruvds/blog/495896/
// https://online-audio-converter.com/ru/
