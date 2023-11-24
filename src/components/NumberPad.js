import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

function NumberPad(){
    return(
        <div className="number-pad">
            <Container fluid>
                <Row className='mb-2'>
                    <Col className='col-3'><NumberButton num='(' /></Col>
                    <Col className='col-3'><NumberButton num=')' /></Col>
                    <Col className='col-3'><NumberButton num='%' /></Col>
                    <Col className='col-3'><OperatorButton operator='÷' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='col-3'><NumberButton num='7' /></Col>
                    <Col className='col-3'><NumberButton num='8' /></Col>
                    <Col className='col-3'><NumberButton num='9' /></Col>
                    <Col className='col-3'><OperatorButton operator='X' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='col-3'><NumberButton num='4' /></Col>
                    <Col className='col-3'><NumberButton num='5' /></Col>
                    <Col className='col-3'><NumberButton num='6' /></Col>
                    <Col className='col-3'><OperatorButton operator='-' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='col-3'><NumberButton num='1' /></Col>
                    <Col className='col-3'><NumberButton num='2' /></Col>
                    <Col className='col-3'><NumberButton num='3' /></Col>
                    <Col className='col-3'><OperatorButton operator='+' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col className='col-3'><NumberButton num='C' /></Col>
                    <Col className='col-3'><NumberButton num='0' /></Col>
                    <Col className='col-3'><NumberButton num='.' /></Col>
                    <Col className='col-3'><OperatorButton operator='=' /></Col>
                </Row>
            </Container>
        </div>             
    )
}

export default NumberPad;