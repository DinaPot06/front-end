import React, { Component } from 'react';
import Search from "../Search/Search";
import Bookitem from './Bookitem';
import { Collection, CollectionItem} from 'react-materialize';
import axios from "axios";

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            book: []
        }
    }

    componentWillMount(){
        this.getAllBooks();
    }

    getAllBooks(){

            axios.get('http://localhost:2839/book/GetAllBooks')
            .then(response => {
              this.setState({book: response.data}, () => {
                    // console.log(this.state);
              })
            })
           .catch(err => console.log(err));

    }

    render(){
        const bookItems = this.state.book.map((book, i) => {
            return(
              //  <li className="collection-item"> {book.Name} </li>
                <Bookitem key={book.id} item={book} />
            )
        });
    return (
        <div className="Book">
        <br/>
            <ul className="collection">
                {bookItems}
            </ul>
        </div>
    );
}}
export default Book;