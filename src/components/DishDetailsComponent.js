import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComment({comments}){
    const commentsArray = comments.map((comment) => {
        return(
            <div key={comment.id}>
                {comment.comment}
                <div>
                    -- {comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </div>
            </div>
        );
    });

    return(
        <React.Fragment>
            <h4>Comments</h4>
            {commentsArray}
        </React.Fragment>    
    );

}

function DishRender({dishes}){
    return(
        <Card>
            <CardImg  width="100%" src={dishes.image} alt={dishes.name} />
                <CardBody>
                    <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{dishes.name}</CardTitle>
                    <CardText>{dishes.description}</CardText>
                </CardBody>
        </Card>
    );   
}

const DishDetails = (props) => {

    return(
        <div className="container">    
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <DishRender dishes={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComment comments={props.comments} />
                </div>
            </div>
        </div>
    );   
}

export default DishDetails;