import React from 'react';
import s from './Main.module.scss';

const Main=()=> {
  return (
    <div className={s.Main}>
        <div className={s.Border}>
            <div className={s.Name}>LOREM IPSUM</div>
            <div className={s.Line}></div>
            <span className={s.Title}>Travel</span>
            <div className={s.Subtitle}>THE INSPIRATIONAL ADVENTURES AROUND THE WORLD</div>
        </div>
    </div>
  );
}

export default Main;
