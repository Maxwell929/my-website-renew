import React from 'react';
import hero1 from './header.png';
import data from './../../data.json';
import './header.scss';
import './Scroll Down/scroll_down.scss'
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';

import Loop from './Loop/loop'

const Header = () => {
    return (
        <Fade>
            <section id='header' className='header'>
                <div className='container container__header'>
                    <p>{data.p1} </p>
                    <p>{data.p2}</p>
                    <Loop/>
                    <img className='image-header' src={hero1} alt='coder'/>
                </div>
                <Link to='about' offset={-60} duration={1000} smooth={true}>
                    <div className='mouse_scroll'>
                        <div className='mouse'>
                            <div className='wheel'/>
                        </div>
                        <div>
                            <span className='m_scroll_arrows one'/>
                            <span className='m_scroll_arrows two'/>
                            <span className='m_scroll_arrows three'/>
                        </div>
                    </div>
                </Link>
            </section>
        </Fade>
    );
};

export default Header;
