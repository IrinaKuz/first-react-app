import React, { Component } from 'react';
import { 
    Row, 
    Col, 
    Breadcrumb, 
    BreadcrumbItem,
    Button,
    Label,
    } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Current state is: ' + JSON.stringify(values));
    }


    render() {
        return(
            <div className="container">
                {/* Breadcrumbs */}
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Col xs="12">
                        <h3>Contact Us</h3>
                        <hr />
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs="12">
                        <h3>Location Information</h3>
                    </Col>
                    <Col xs="12" sm={{size: 10, offset: 1}}>
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </Col>
                    <Col xs="12" sm={{size: 6, offset: 1}}>
                        <h5>Map of our Location</h5>
                    </Col>
                    <Col xs="12" sm={{size: 11, offset: 1}}>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs="12">
                        <h3>Send us your feedback</h3>
                    </Col>
                    <Col xs="12" md="9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='="form-group'>
                                <Label for="firstname" md="2">
                                    First Name
                                </Label>
                                <Col md="10">
                                    <Control.text model=".firstname"
                                            id="firstname"
                                            name="firstname"
                                            className='form-control'
                                            placeholder="First Name"
                                    />
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Label for="lastname" md="2">
                                    Last Name
                                </Label>
                                <Col md="10">
                                    <Control.text model=".lastname"
                                            id="lastname"
                                            name="lastname"
                                            className='form-control'
                                            placeholder="Last Name"
                                    />
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Label for="telnum" md="2">
                                    Contact Tel.
                                </Label>
                                <Col md="10">
                                    <Control.text model=".telnum"
                                            id="telnum"
                                            name="telnum"
                                            className='form-control'
                                            placeholder="Contact Tel."
                                    />
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Label for="email" md="2">
                                    Email
                                </Label>
                                <Col md="10">
                                    <Control.text model=".email"
                                            id="email"
                                            name="email"
                                            className='form-control'
                                            placeholder="Email"
                                    />
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Col md={{ size: 6, offset: 2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".agree" 
                                                            name="agree"
                                                            className='form-check-input' 
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1}}>
                                    <Control.select model=".contactType" 
                                                    name="contactType"
                                                    className='form-control'
                                     >
                                            <option>Tel.</option>
                                            <option>Email</option>

                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Label for="message" md="2">
                                    Your feedback
                                </Label>
                                <Col md="10">
                                    <Control.textarea model=".message" type="textarea"
                                            id="message"
                                            name="message"
                                            rows="12"
                                            className='form-control'
                                    />
                                </Col>
                            </Row>
                            <Row className='="form-group'>
                                <Col md={{ size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>

                                </Col>
                            </Row>
                        </LocalForm>
                    </Col>
                </Row>
            </div>
        );
    }  
}

export default Contact;