import React from 'react'
import { Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4}>
            <a href={link}>
            <div className='proj-imgbx'>
                <img src={imgUrl} className='cardImg'/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </a>

            </Col>
    )
}

export default ProjectCard