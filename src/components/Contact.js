import React, { useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
const Contact = () => {

    const form = useRef();
    const sendEmail = () =>{}

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
     const [formDetails, setFromDetails] = useState(formInitialDetails);
     const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFromDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('sending...');
        let response = await fetch('http://localhost:5000/cotact', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('send');
        let result = response.json();
        setFromDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent sucessfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' })
        }
    }
    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='Last Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email Address'/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone No.'/>
                                </Col>
                                <Col>
                                    <textarea rows='6' value={formDetails.message} placeholder='Message'/>
                                    <button type="submit" > <span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <col>
                                        <p className={status.success === false ? 'danger' : 'success'} >{status.message}</p>
                                    </col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact