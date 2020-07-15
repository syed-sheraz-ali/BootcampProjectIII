import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import {Button } from 'react-bootstrap';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1 className="pro">Welcome to Product Item</h1>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={380} alt="shoe" />
                <p >safe Trading Ladies Shoes on Leading B2B Platform. Quality Ladies Shoes with Competitive Price. China’s B2B Impact Award. Leading B2B Portal. SGS Audited Suppliers.        </p>
                <Button variant="primary" className="buy">Buy Now</Button>
            </div>
        </div>
    );
}

export default ProductItem;
