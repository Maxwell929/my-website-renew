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
                        <Link className="nav__link" to='about' offset={-60} duration={1000} smooth={true} spy={true} activeClass="active">
                            {data.nav1}
                        </Link>
                        <Link className="nav__link" to='projects' offset={-10} duration={1000} smooth={true} spy={true} activeClass="active">
                            {data.nav2}
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
