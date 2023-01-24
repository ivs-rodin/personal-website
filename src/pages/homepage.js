import React, { useRef } from "react";
import { Component } from 'react';
import Typing from 'react-typing-animation';
import { Parallax } from 'react-parallax';

import { useParallax } from "react-scroll-parallax";

// import BackgroundIntro from '../../public/img/background.jpg'
import '../css/App.css'

const Homepage = () => {

    const { ref } = useParallax({ speed: 400 });
  
    return (
        <div className="intro_page">
            <div ref={ref} className='intro_group'>
                <header className="intro_header">
                    <div className="intro_text">Welcome to my website</div>
                    <div className="intro_text">Ivan Rodin</div>
                </header>
                <h4 className='intro_type_text'>
                    <div>
                    I'm a
                    <Typing loop={true}>
                        <Typing.Speed ms={50} />
                        <span>Optimization developer</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={30} />
                        <span>Programmer</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={20} />
                        <span>Volleyballer</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={20} />
                    </Typing>
                    </div>
                </h4>
            </div>
        </div>
    );
  }

  
export default Homepage;
