import React, { Component } from 'react';
import { 
    Row, 
    Col, 
    Breadcrumb, 
    BreadcrumbItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input } from 'reactstrap'
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md="2">
                                    First Name
                                </Label>
                                <Col md="10">
                                    <Input type="text"
                                            id="firstname"
                                            name="firstname"
                                            placeholder="First Name"
                                            value={this.state.firstname}
                                            onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" md="2">
                                    Last Name
                                </Label>
                                <Col md="10">
                                    <Input type="text"
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Last Name"
                                            value={this.state.lastname}
                                            onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telnum" md="2">
                                    Contact Tel.
                                </Label>
                                <Col md="10">
                                    <Input type="tel"
                                            id="telnum"
                                            name="telnum"
                                            placeholder="Contact Tel."
                                            value={this.state.telnum}
                                            onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md="2">
                                    Email
                                </Label>
                                <Col md="10">
                                    <Input type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {" "}
                                                    <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange} >
                                            <option>Tel.</option>
                                            <option>Email</option>

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message" md="2">
                                    Your feedback
                                </Label>
                                <Col md="10">
                                    <Input type="textarea"
                                            id="message"
                                            name="message"
                                            rows="12"
                                            value={this.state.message}
                                            onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>

                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }  
}

export default Contact;