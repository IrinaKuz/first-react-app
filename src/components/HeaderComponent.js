import React, { Component } from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Nav,
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    Container, 
    Row, 
    Col,
    Form,
    FormGroup,
    Label,
    Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value 
                + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <>
                <Navbar dark expand="md" fixed="top">
                        <NavbarBrand href="/">
                            <NavLink to="/home">
                                <img src="assets/images/logo.png" width="34" alt="Ristorante Con Fusion"/>
                            </NavLink>
                        </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/about">
                                            <span className="fa fa-info fa-lg"></span> About us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span> Menu
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-phone fa-lg"></span> Contact us
                                        </NavLink>
                                    </NavItem>
                                    
                                </Nav>
                                <Nav className="ms-auto">
                                <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg">
                                                 Login
                                            </span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                </Navbar>
                <div className="jumbotron">
                    <Container>
                        <Row className="row-header">
                            <Col xs="12" sm="6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World&amp;s best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses</p>
                            </Col>
                            <Col>

                            </Col>
                            </Row>
                    </Container>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login</ModalHeader> 
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                        innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={(input) => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} />
                                    Remember Me
                                </Label>       
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody> 
                </Modal>
            </>
        )
    }
}

export default Header;