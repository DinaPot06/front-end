import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';

function Nav() {
    const navStyle ={
        color: 'white'
    };
    return (

                <nav>
                    <ul className="nav-links">
                        <Link style={navStyle} to="/">
                        <br/>
                            <Icon type="home" />
                        </Link>
                        <Link style={navStyle} to="/book">
                            <br/>
                            <Icon type="book" />
                        </Link>
                        <Link style={navStyle} to="/order">
                            <br/>
                            <Icon type="shop" />
                        </Link>
                        <Link style={navStyle} to="/user">
                            <br/>
                            <Icon type="user" />
                        </Link>
                        <Link style={navStyle} to="/signin">
                            <br/>
                            <li> Sign In</li>
                        </Link>

                    </ul>
                </nav>

    );
}

export default Nav;
