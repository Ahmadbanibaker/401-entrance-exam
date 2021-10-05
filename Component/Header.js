import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import {Link } from "react-router-dom";

 class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
           
            <Link style ={{color: 'white'}} to="/">Home</Link>
            <Link style ={{color: 'white'}} to="/">fav</Link>
            
          </Navbar>
        )
    }
}

export default Header
