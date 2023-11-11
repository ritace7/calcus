import { useSelector, useDispatch} from "react-redux";
import {appendToExpression, clearValue, updateValue } from '../redux/calculator';
// import * as math from "https://esm.sh/mathjs";

const OperatorButton = ({operator}) => {
    const dispatch = useDispatch();
    const displayValue = useSelector(state => state.calculator.value);
    // const expression = useSelector(state => state.calculator.expression);
    // const reg = /[/*+-]/; 

    const operate = (operator) => {
        dispatch(appendToExpression(displayValue));
        dispatch(appendToExpression(operator));
        dispatch(clearValue());
    }

    const getTotal = () =>{
        dispatch(appendToExpression(displayValue));
        dispatch(clearValue());
        dispatch(updateValue());
        // dispatch(updateValue('result'));
        // console.log(displayValue);
        // console.log(expression);
        // dispatch(updateValue(math.evaluate(displayValue)));
    }

    const handleClick = (event) =>{
        const buttonClicked = event.target.textContent; 
        switch(buttonClicked){
            case '=':
                getTotal();
                break;
            default:
                operate(buttonClicked);
        }
    }

    return ( 
        <button className='btn btn-light' onClick={handleClick}>
            {operator}
        </button> 
    );
}
 
export default OperatorButton;