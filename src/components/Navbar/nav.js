import React from 'react';
import data from './../../data.json';
import './nav.scss';
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';
import logo from './logo_small.png';
import {FaGithub, FaLinkedin} from 'react-icons/fa';


const Navbar = () => {
    return (
        <section className='nav'>
            <div className='container navbar__container'>
                <Fade top duration={1000} delay={0}  distance='200' >
                    <Link to='header' offset={-80}  duration={1000} smooth={true}>
                        <img src={logo} alt={logo} className='logo'/>
                    </Link>
                </Fade>

                <div className={'nav-links'}>
                    <Fade top duration={1000} delay={0} distance='50px'>
                        <Link to='about' offset={-60}  duration={1000} smooth={true}>
                            <button className='btn-4'><span>{data.nav1}</span></button>
                        </Link>
                    </Fade>
                    <Fade top duration={1000} delay={300} distance='50px'>
                        <Link to='projects' offset={0}  duration={1000} smooth={true}>
                            <button className='btn-4'><span>{data.nav2}</span></button>
                        </Link>
                    </Fade>
                    <div className='container-logos'>
                        <a href={data.nav_github} rel='noopener' target={'_blank'}><FaGithub className='logos-nav'/></a>
                        <a href={data.nav_linkedIn} rel='noopener' target={'_blank'}><FaLinkedin className='logos-nav'/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
