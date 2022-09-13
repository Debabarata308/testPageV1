import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import HeadTail from './components/HeadTail';
import Home from './components/Home';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <div className='d-flex'>
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Brand href="/about">About</Navbar.Brand>
              <Navbar.Brand href="/headtail">Head & Tail</Navbar.Brand>

            </div>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/headtail' element={<HeadTail />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
