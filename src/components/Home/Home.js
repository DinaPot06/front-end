import React from 'react';
import "./Home.css";
import Background from '../../book.jpg';
import {Icon} from 'antd';

const Home = () => {
    return (
        <div className="body">
            <h1 className="name"> Book <br/> Store </h1>
            <div className="buy" >
                <a href="/book"> <Icon type="plus-circle" theme="twoTone" /> </a>
            </div>

                <img src={Background} className="pic" />
        </div>
    );
};

export default Home;