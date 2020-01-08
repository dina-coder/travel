import React from 'react';
import s from './AboutMe.module.scss';
import img from '../img/about.png';
import Title from "../Title/Title";

const AboutMe=()=> {
  return (
    <div className={s.About}>
        <div className={s.Border}>
            <img src={img}/>
            <span className={s.Title}>
            <Title  title='About me' />
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
                aliquip ex ea commodo consequat.<br /> <br />

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br />
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br />
                proident
            </p>
    </div>
    </div>
  );
}

export default AboutMe;
