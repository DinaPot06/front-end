import React from 'react';
import Search from "../Search/Search";
import "./Home.css";
import { Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';

const Home = () => {
    return (
        <div>
            <Search/>
            <div className="buy" >
                <a href="/book"> <Icon type="plus-circle" theme="twoTone" /> </a>
            </div>


        </div>
    );
};

export default Home;