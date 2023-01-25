import React, { useRef } from "react";
import { Component } from 'react';
import Typing from 'react-typing-animation';
import { Parallax } from 'react-parallax';
import {useState, useEffect} from 'react';

import { useParallax } from "react-scroll-parallax";

// import BackgroundIntro from '../../public/img/background.jpg'
import '../css/App.css'

const Homepage = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <div className="intro_page">
            <div className='intro_group'>
                <header className="intro_header" style={{ transform: `translateY(${ -offsetY * 1.5}px) `}}>
                    <div className="intro_text">Welcome to my website</div>
                    <div className="intro_text">Ivan Rodin</div>
                </header>
                {/* <h4 className='intro_type_text'>
                    <div>
                    I'm a
                    <Typing loop={true}>
                        <Typing.Speed ms={200} />
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
                </h4> */}
            </div>
        </div>
    );
  }

  
export default Homepage;
