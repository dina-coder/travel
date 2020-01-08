import React from 'react';
import s from './Title.module.scss';

const Title=(props)=> {
    return (
        <div>
            <div className={s.Title}>{props.title}</div>
            <div className={s.Line}></div>
        </div>
    );
}

export default Title;
