import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Col, Label, Button } from 'reactstrap';

class Contact extends Component{
    constructor(props){
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
        const value = target.type === 'checkbox'? target.checked : target.value;
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
    render(){
        return(

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
                            <Input className="col-5" type = "text" id = "firstName" value ={this.state.firstName} onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup row>
                            <Label className="col-5">Last Name</Label>
                            <Input className="col-5" type = "text" id = "lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup row>
                            <Label className="col-5">Telephone</Label>
                            <Input className="col-5" type = "tel" id = "telnum" value={this.state.telnum} onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup row>
                            <Label className="col-5">Email</Label>
                            <Input className="col-5" type = "text" id = "email" value={this.state.email} onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6}}>
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
                                <Col md={{size: 3, offset: 1}}>
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
                                <Button className="offset-5 col-3" color = "primary" type="submit" onClick = {this.handleSubmit}>
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