import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/icons8-html-5.png';
import meter2 from '../assets/img/icons8-css3.svg'
import meter3 from '../assets/img/icons8-javascript-96.png';
import meter4 from '../assets/img/icons8-react.svg'
import meter5 from '../assets/img/icons8-bootstrap.svg'
import meter6 from '../assets/img/icons8-node-js.svg'
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className='item'>
                                        <img src={meter1} alt='meter1' />
                                        <h5>Html</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='meter2' />
                                        <h5>Css</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='meter3' />
                                        <h5>Javascript</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter4} alt='meter' />
                                        <h5>React js</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter5} alt='meter' />
                                        <h5>Bootstrap</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter6} alt='meter' />
                                        <h5>Node js</h5>
                                    </div>
                                   
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-left' src={colorSharp} alt='coor'/>

            </section>
        </div>
    )
}

export default Skills