import React from 'react';
import '../styles/calculatorBody.css';
import NumberPad from './NumberPad';
import { useSelector } from 'react-redux';
import face from '../images/face.png';
import leftHand from '../images/handLeft.png';
import rightHand from '../images/handRight.png';
import legs from '../images/legs.png';

function CalculatorBody(){
    const { value, expression } = useSelector((state) => state.calculator);
    return(
        <div className="calculator">
            <img src={face} id="face" alt="calculator face" rel="noreferrer"/>
            <img src={leftHand} id="left-hand" alt="calculator face" rel="noreferrer"/>
            <div className="calculator-body">
                <div className="calculator-head">
                    <div className="display">
                        <p className="expression">
                            {expression}
                        </p>
                        <p className="value">
                            {value}
                        </p>
                    </div>
                </div>
                <NumberPad />
            </div>
            <img src={rightHand} id="right-hand" alt="calculator face" rel="noreferrer"/>
            <img src={legs} id="legs" alt="calculator legs" rel="noreferrer"/>
        </div>     
    )
}

export default CalculatorBody;