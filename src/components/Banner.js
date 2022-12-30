import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import Typical from 'react-typical';
import headerImg from '../assets/img/header-img.svg';
import whatsapp from '../assets/img/icons8-whatsapp.svg';
import {motion} from 'framer-motion';


const Banner = () => {

    return (
        <section className='banner' id='home'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7} >
                        <div className="banner-left">
                       <h1> Hi, I'm Moses Inawo</h1>
                      <h2>
                            <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                ' Web developer ',
                                1000,
                                ' React-developer ',
                                1000,
                            ]}
                            />
                        </h2></div>
                        {/* <span className='tagline'> Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Moses`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> */}
                        <p className='banner-left-2'> I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects..</p>
                        <button onClick={() => console.log('connect')}> Let't connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img
                    src={headerImg} alt='header-img'className='space'/>
                    </Col>
                    <div>
                        <a href='https://wa.link/r41k71'>
                   <img src={whatsapp} alt='whatsapp' className='whatsapp'/>
                        </a>
                    </div>
                </Row>  
            </Container>
        </section>
    )
}

export default Banner