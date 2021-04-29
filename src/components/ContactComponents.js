import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem, Row, Col, Label, Button } from 'reactstrap';
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
            message: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //event.preventDefault();
    }

    render() {
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
                        <LocalForm>
                            <Row className='form-group'>
                                <Label className="col-5">First Name</Label>
                                <Control.text className="col-5 form-control" id="firstName"
                                    model='.firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label className="col-5">Last Name</Label>
                                <Control.text className="col-5 form-control" id="lastName"
                                    model='.lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label className="col-5">Tel. No</Label>
                                <Control.text className="col-5 form-control" id="telnum"
                                    model='.telnum'
                                    value={this.state.telnum}
                                    onChange={this.handleInputChange}
                                />
                            </Row>
                            <Row className='form-group'>
                                <Label className="col-5">Email</Label>
                                <Control.text className="col-5 form-control" id="email"
                                    model='.email'
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label className="col-5">
                                    Your feedback
                                </Label>
                                <Control.textarea id="message" className="col-7 form-control" rows="10"
                                    model = '.message'
                                    value={this.state.message}
                                    onChange={this.handleInputChange}>
                                </Control.textarea>
                            </Row>
                            <Row className = "form-group">
                                <Button className="offset-5 col-3" color="primary" type="submit" onClick={this.handleSubmit}>
                                    Send Feedback
                                </Button>
                            </Row>
                                
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;