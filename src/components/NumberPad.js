import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import '../styles/numberPad.css';


function NumberPad(){
    return(
        <div className="number-pad">
            <Container fluid>
                <Row className='mb-2'>
                    <Col ><NumberButton num='(' /></Col>
                    <Col><NumberButton num=')' /></Col>
                    <Col><NumberButton num='%' /></Col>
                    <Col><OperatorButton operator='÷' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col><NumberButton num='7' /></Col>
                    <Col><NumberButton num='8' /></Col>
                    <Col><NumberButton num='9' /></Col>
                    <Col><OperatorButton operator='X' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col><NumberButton num='4' /></Col>
                    <Col><NumberButton num='5' /></Col>
                    <Col><NumberButton num='6' /></Col>
                    <Col><OperatorButton operator='-' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col><NumberButton num='1' /></Col>
                    <Col><NumberButton num='2' /></Col>
                    <Col><NumberButton num='3' /></Col>
                    <Col><OperatorButton operator='+' /></Col>
                </Row>
                <Row className='mb-2'>
                    <Col><NumberButton num='C' /></Col>
                    <Col><NumberButton num='0' /></Col>
                    <Col><NumberButton num='.' /></Col>
                    <Col><OperatorButton operator='=' /></Col>
                </Row>
            </Container>
        </div>             
    )
}

export default NumberPad;