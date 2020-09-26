import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItems({dish, onClick}){
  const menu = dish.map((dishes) => {
    return (
      <Card className="col-12 col-md-5 m-1">
        <Link to={`/menu/${dishes.id}`}>
          <CardImg  width="100%" src={dishes.image} alt={dishes.name} />
          <CardImgOverlay>
            <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{dishes.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
  });
  return(
    <React.Fragment>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h4>Menu</h4>
          <hr />
        </div>  
      </div>
      <div className="row">
        {menu}
      </div>
    </React.Fragment>
  );
}

const Menu = (props) => {
  return(
    <div className="container">
       <RenderMenuItems dish = {props.dishes} onClick = {props.onClick}/>
    </div>
  );
  
}

export default Menu;