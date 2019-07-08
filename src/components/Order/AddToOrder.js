import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddToOrder extends Component{
    addToOrder(order){
        axios.request({
            method:'post',
            url:'http://localhost:2839/book/CreateOrder',
            data: order
        }).then(response => {
            this.props.history.push('/order');
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const order = {
            Name: this.name.value,
            Genre: this.genre.value,
        }
        this.addToOrder(order);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <p onSubmit={this.onSubmit.bind(this)}>
                </p>
            </div>
        )
    }
}

export default AddToOrder;