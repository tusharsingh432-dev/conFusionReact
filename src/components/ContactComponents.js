import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Col, Label, Button, FormFeedback } from 'reactstrap';
import validator from 'validator'
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                telnum: false,
                email: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(firstName, lastName, email, telnum) {
        const errors = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstName && firstName.length < 3) {
            errors.firstName = "First Name should be >= 3 characters"
        }
        if (this.state.touched.lastName && lastName.length < 3) {
            errors.lastName = "Last Name should be >= 3 characters"
        }
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(this.state.telnum)) {
            errors.telnum = 'Tel. not valid';
        }
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = 'Email should contain a @';
        }


        return errors;
    }

    render() {
        const error = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.telnum);

        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h4>Contact Us</h4>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form>
                            <FormGroup row>
                                <Label className="col-5">First Name</Label>
                                <Input className="col-5" type="text" id="firstName"
                                    value={this.state.firstName}
                                    invalid={error.firstName !== ''}
                                    onBlur={this.handleBlur('firstName')}
                                    valid={error.firstName === '' && this.state.touched.firstName}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback className="offset-5">{error.firstName}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-5">Last Name</Label>
                                <Input className="col-5" type="text" id="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    invalid={error.lastName !== ''}
                                    onBlur={this.handleBlur('lastName')}
                                    valid={error.lastName === '' && this.state.touched.lastName}
                                />
                                <FormFeedback className='offset-5'>{error.lastName}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-5">Tel. No</Label>
                                <Input className="col-5" type="text" id="telnum"
                                    value={this.state.telnum}
                                    onChange={this.handleInputChange}
                                    invalid={error.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    valid={error.telnum === '' && this.state.touched.telnum}
                                />
                                <FormFeedback className='offset-5'>{error.telnum + ' ' + this.state.telnum}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-5">Email</Label>
                                <Input className="col-5" type="text" id="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    invalid={error.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    valid={error.email === '' && this.state.touched.email}
                                />
                                <FormFeedback className='offset-5'>{error.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                id="agree"
                                                value={this.state.agree} onChange={this.handleInputChange}
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" id="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-5">
                                    Your feedback
                                </Label>
                                <Input id="message" className="col-7" type="textarea" rows="10" value={this.state.message} onChange={this.handleInputChange}></Input>
                            </FormGroup>
                            <FormGroup row>
                                <Button className="offset-5 col-3" color="primary" type="submit" onClick={this.handleSubmit}>
                                    Send Feedback
                                </Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

// function Contact(props) {

// }

export default Contact;