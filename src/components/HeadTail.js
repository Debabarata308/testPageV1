import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'


const HeadTail = () => {
  const [selected, setSelected] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [errMsg, seterrMsg] = useState('');

  let handleSubmit = (e) => {
    console.log(e)
    if(!e) {
      seterrMsg('Please select value from dropdown!')
    }
    setFinalValue(e)
    appendEle(e)
  }
  let handleChange = (e) => {
    setSelected(e);
  }
  let handleReset = () => {
    setFinalValue('');
    setSelected('');
    seterrMsg('');
    let parent = document.getElementById('main');
    for (let i = 0; i < parent.children.length; i++) {
      setTimeout(() => {
        parent.removeChild(parent.lastChild);
      }, 300);
    }
  }

  let appendEle = (e) => {
    let parent = document.getElementById('main');
    let childp = parent.lastChild;
    let para = document.createElement('p');
    para.textContent = e;
    let lastEl = childp.childNodes.length > 0 ? childp.childNodes[childp.childNodes.length - 1].textContent : "";
    if (lastEl !== "" && lastEl !== e ) {
      let newChild = document.createElement('div');
      newChild.classList.add('col');
      parent.append(newChild);
      newChild.append(para);
    } else {
      childp.append(para);
    }
  }
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
        <Col className='col-lg-6 col-md-6  col-sm-12  col-xs-12'>
          <Card className='p-3 shadow-lg p-3 mb-5 bg-body rounded'>
            <Card.Body className='text-center'>
              <p>
                Please select some Value
              </p>
            </Card.Body>
            <Row>
              <Col className='text-end'>
                <Form.Select size="sm" value={selected} onChange={(e) => handleChange(e.target.value)}>
                  <option>Select</option>
                  <option>H</option>
                  <option>T</option>
                </Form.Select>
              </Col>
              <Col className='text-center'>
                <Button className='p-1' onClick={() => handleSubmit(selected)} variant="success">Submit</Button>
              </Col>
              <Col className='text-end'>
                <Button className='p-1' onClick={() => handleReset()} variant="info">Reset</Button>
              </Col>
            </Row>
           {
            errMsg !== '' ? <Row className='mt-2'>
              <Col className='text-danger text-center'>{errMsg}</Col>
            </Row> : ""
           }
          </Card>
        </Col>
        <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
      </Row>
      <Row>
          <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
          <Col className='col-lg-6 col-md-6  col-sm-12  col-xs-12'>
            <Card className='p-3 shadow-lg p-3 mb-5 bg-body rounded'>
              <Card.Body className=''>
                <Row id='main'>
                  <div className='col'>

                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-lg-3 col-md-6  col-sm-0  col-xs-0'></Col>
        </Row>

    </Container>
  )
}

export default HeadTail