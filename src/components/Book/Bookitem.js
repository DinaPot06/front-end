import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AddToOrder from '../Order/AddToOrder';
import {Icon} from 'antd';
import axios from 'axios';
import './Book.css';

class Bookitem extends Component{
    constructor(props){
        super(props);
        this.state = {
            author: [],
            item:props.item
        }
    }

  componentDidMount (){
        axios.get('http://localhost:2839/Author/GetAuthorById/${AuthorId}')
            .then(response => {
                this.setState({
                   author: response.data
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

render(){
          this.state.author.map((author, i) => {
        return(
              <li className="collection-item"> {author.AuthorId} </li>
            //<Bookitem key={book.id} item={book} />
        )
    });
        return (
            <p className="nesto">
                <div className="tekst">
                <h1> Book Name: {this.state.item.Name} </h1>
                <h1> Genre: {this.state.item.Genre} </h1>
                <h1> Author: {this.state.item.author} </h1>
                <h1><Link to={`/order/${this.state.item.id}`}>
                        <Icon type="shopping-cart" />
                </Link> </h1>
                <div className="slika">
                <img className="rez" src={this.state.item.ImageUrl} />
                </div>
                </div>
            </p>
        )
    }
}
export default Bookitem;