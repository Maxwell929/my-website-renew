import React from 'react';
import data from './../../data.json';
import './nav.scss';
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';
import logo from './logo_small.png';
import {FaGithub, FaLinkedin} from 'react-icons/fa';


const Navbar = () => {
    return (
        <Fade>
        <nav className='nav'>
            <div className='container navbar__container'>
                    <Link to='header' offset={-80} duration={1000} smooth={true} >
                            <img src={logo} alt={logo} className='logo'/>
                    </Link>

                <div className={'nav-links'}>
                        <Link to='about' offset={-60} duration={1000} smooth={true} spy={true} activeClass="active">
                            <button className='btn-4'><span>{data.nav1}</span></button>
                        </Link>
                        <Link to='projects' offset={-10} duration={1000} smooth={true} spy={true} activeClass="active">
                            <button className='btn-4'><span>{data.nav2}</span></button>
                        </Link>
                    <div className='container-logos'>
                        <a href={data.nav_github} rel='noopener' target={'_blank'}><FaGithub className='logos-nav'/></a>
                        <a href={data.nav_linkedIn} rel='noopener' target={'_blank'}><FaLinkedin className='logos-nav'/></a>
                    </div>
                </div>
            </div>
        </nav>
        </Fade>
    );
};

export default Navbar;
