import React, { useState } from 'react';
import '../styles/calculatorBody.css';
import LeftHand from '../images/handLeft.png'
import NumberPad from './NumberPad';

function CalculatorBody(){



    return(
        <div className="calculator-body">
            <div className="calculator-head">
                <div className="display">
                    
                </div>
            </div>
            <NumberPad />
            {/* <img src={LeftHand} alt="Left Hand" className="left-hand"/> */}
        </div>
    )
}

export default CalculatorBody;