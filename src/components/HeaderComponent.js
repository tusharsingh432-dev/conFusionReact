import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Collapse, NavbarToggler, Nav, NavItem, Modal, Input, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import Label from 'reactstrap/lib/Label';

class Header extends Component {

    constructor(props) {
        super(props);
        this.remember = false;
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isLoginOpen: false
        };
    }

    handleLogin(event) {
        this.toggleLogin();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLogin() {
        this.setState({
            isLoginOpen: !this.state.isLoginOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} className="fa-caret-square-down" />
                        <NavbarBrand className='mr-auto' href="/">
                            <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home'></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className='fa fa-info'></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className='fa fa-list'></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <span className='fa fa-address-card'></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={this.toggleLogin} outline ><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                            </NavItem>
                        </Nav>
                    </div>


                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal toggle={this.toggleLogin} isOpen={this.state.isLoginOpen}>
                    <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup row>
                                <Label htmlFor="username" className = "col-5">Username</Label>
                                <Input type="text" id="username" name="username" className = "col-5"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" className = "col-5">Password</Label>
                                <Input type="password" id="password" name="password" className="col-5"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;