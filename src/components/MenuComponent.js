import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay} from 'reactstrap';

function RenderMenuItems({dish, onClick}){
  const menu = dish.map((dishes) => {
    return (
      <div key={dishes.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => onClick(dishes.id)}>
          <CardImg  width="100%" src={dishes.image} alt={dishes.name} />
          <CardImgOverlay>
            <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{dishes.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return(
    <div className="row">
      {menu}
     </div>
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