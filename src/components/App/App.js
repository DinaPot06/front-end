import React from 'react';
import './App.css';
import Home from "../../components/Home/Home";
import User from "../../components/User/User";
import Book from "../Book/Book";
import Nav from "../Navigation/Nav";
import Order from "../Order/Order";
import Register from "../Register/Register";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
         <Nav/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/book" component={Book}/>
                <Route path="/order" component={Order}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </div>
    </Router>

  );
}
export default App;
