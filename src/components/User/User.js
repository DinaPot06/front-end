import React from 'react';
import Login from "../LogIn/LogIn";
import BookRepository from "../../repository/BookRepository";
import './User.css';



function User() {
    return (
        <div className="User">
            <h1>Log In</h1>
            <Login/>
        </div>
    );
}

export default User;