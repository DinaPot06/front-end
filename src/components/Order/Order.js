import React from 'react';
import {Link} from 'react-router-dom';
import "./Order.css";

function Order() {
    return (
        <div className="Order">
            <br/>
                <Link className="btn" to="/book"> Back </Link>
            <h1>Order</h1>

        </div>
    );
}

export default Order;