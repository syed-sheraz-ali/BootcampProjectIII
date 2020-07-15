import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';
import {Button } from 'react-bootstrap';
function Product() {

    return (
        <div className="card1">
            <h1 className="pro">Welcome to Product</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" className="PI" />
                                <Button className="buy" variant="primary">Buy Now</Button>
                    </Link>)
                })}
            </div>
        </div>
    );
}

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
export default Product;
