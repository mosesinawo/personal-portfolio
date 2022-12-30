import React from 'react'
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from "../assets/img/fitclub.png";
import projImg2 from "../assets/img/design-home-light.jpg";
import projImg3 from "../assets/img/project-img3.png";
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

const Project = () => { 

    const projects = [
        {
            title: "Business Startup",
            description: "Click to view site",     
            imgUrl: projImg1,
            link: 'http://fitclubbymoses.pages.dev/'           
        },     
        {
            title: "Business Startup",
            description: "Click to view site", 
            imgUrl: projImg2,
            link: 'https://countryappbymoses.netlify.app/'  
        },
        {
            title: "Business Startup",
            description: "Click to view site",
            imgUrl: projImg3,
            link: '#'
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg1,
        //     link: '#'
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg2,
        //     link: '#'
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        //     link: '#'  
        // },
    ];
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) =>{
                                                return(<ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey='second'> somthing there</Tab.Pane>
                                <Tab.Pane eventKey='third'>something there</Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Project