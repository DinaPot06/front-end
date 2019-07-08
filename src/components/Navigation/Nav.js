import React from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'antd';

function Nav() {
    const navStyle ={
        color: 'white',
        fontWeight: '100'
    };
    return (
                <nav className="navi">
                    <ul className="nav-links">
                        <Link style={navStyle} to="/">
                        <br/>
                            <Icon type="home" />
                        </Link>
                        <Link style={navStyle} to="/book">
                            <br/>
                            <Icon type="book"/>
                        </Link>
                        <Link style={navStyle} to="/order">
                            <br/>
                            <Icon type="shop" />
                        </Link>
                        <Link style={navStyle} to="/user">
                            <br/>
                            <Icon type="user" />
                        </Link>
                        <Link style={navStyle} to="/register">
                            <br/>
                            <li>Register</li>
                        </Link>
                    </ul>

                </nav>
    );
}

export default Nav;
