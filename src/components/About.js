import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const About = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
        <Col className='col-lg-6 col-md-6  col-sm-12  col-xs-12'>
          <Card className='p-3 shadow-lg p-3 mb-5 bg-body rounded'>
            <Card.Body className='text-center'>
              <p>
                Codewexy Digital LLP is a custom software development and IT Consulting company that provides services to enterprises across the globe. We customize and implement solutions that are based on cloud platform like Azure, AWS and Google. Our core strength is custom application development and custom API integration using cloud platform as a service.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
      </Row>
    </Container>
  )
}

export default About