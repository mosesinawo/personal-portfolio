import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/icons8-linkedin-circled.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-twitter.svg';

const NavBar = () => {

     const { activeLink, setActiveLink } = useState( 'home');
    // const { scroll, setScroll } = useState(false);

    // useEffect (() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScroll(true)
    //         } else {
    //             setScroll(false)
    //         }
    //     }

    //     window.addEventListener('scroll', onScroll)

    //     return () => window.removeEventListener('scroll', onScroll)
    //}, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
       
            <Navbar bg="dark" expand="lg">
                <Container >
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" className='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Link</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects </Nav.Link>
                         
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/inawo-moses-5aa01b24a'> <img className='icons' src={navIcon1} alt="nav1"/></a>  
                                <a href='https://github.com/mosesinawo'> <img className='icons'  src={navIcon2} alt="nav2"/></a>
                                <a href='https://twitter.com/Metallurgst'> <img className='icons'  src={navIcon3} alt="nav3"/></a>  
                            </div>
                            <button className='vvd' onClick={() => console.log('connect')}>
                                <a className='connect' href='https://wa.link/r41k71'>
                                <span >
                                    Contact Me
                                </span>
                                </a>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
    )
}

export default NavBar