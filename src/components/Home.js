import React from 'react'
import { Link } from 'react-router-dom';
// import About from './components/About';
// import HeadTail from './components/HeadTail';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Home = () => {
  return (
    <Container className='mt-5'>
      <Row>
      <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
        <Col className='col-lg-6 col-md-6  col-sm-12  col-xs-12'>
          <Card className='p-3 shadow-lg p-3 mb-5 bg-body rounded'>
            <Card.Body className='text-center'>
              <h5>Please select link to go appropriate page.</h5>
            </Card.Body>
            <Row>
              <Col className='text-end'><a className='btn btn-primary' href='/about'>About</a></Col>
              <Col className='text-left'><a className='btn btn-primary' href='/headtail'>Heas & Tail</a></Col>
            </Row>
          </Card>
        </Col>
        <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
      </Row>
    </Container>
  )
}

export default Home