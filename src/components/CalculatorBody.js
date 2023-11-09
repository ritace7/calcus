import React from 'react';
import '../styles/calculatorBody.css';
import NumberPad from './NumberPad';
import { useSelector } from 'react-redux';
// import legs from '../images/legs.png';

function CalculatorBody(){
    const { value, expression } = useSelector((state) => state.calculator);
    return(
        <div className="calculator">
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
            {/* <div className="legs">
                <img src={legs} alt="calculator legs" rel="noreferrer"/>
            </div> */}
        </div>     
    )
}

export default CalculatorBody;