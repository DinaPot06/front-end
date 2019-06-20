import React from 'react';
import Login from "../LogIn/LogIn";
import BookRepository from "../../repository/BookRepository";



function User() {
    return (
        <div className="User">
            <h1>User</h1>
            <Login/>

        </div>
    );
}

export default User;