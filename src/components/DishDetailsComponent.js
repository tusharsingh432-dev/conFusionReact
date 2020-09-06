import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';

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
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {commentsArray}
        </div>
    );

}

function DishRender({dishes}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg  width="100%" src={dishes.image} alt={dishes.name} />
                    <CardBody>
                        <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{dishes.name}</CardTitle>
                        <CardText>{dishes.description}</CardText>
                    </CardBody>
            </Card>
        </div>
    );   
}

const DishDetails = (props) => {

    if (props.dishes) {
        return(
            <div className="container">
                <div className="row">
                    <DishRender dishes = {props.dishes} />
                    <RenderComment comments = {props.dishes.comments} />
                </div>
            </div>
        );   
    } else {
        return(
            <div></div>
        );
    }
    
}

export default DishDetails;