import React, { Component } from 'react';
import { 
    Nav,
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    Container, 
    Row, 
    Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <>
                <Navbar dark expand="md" fixed>
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
                                        <NavLink className="nav-link" to="/aboutus">
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
            </>
        )
    }
}

export default Header;