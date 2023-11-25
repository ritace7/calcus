import { useSelector, useDispatch} from "react-redux";
import {appendToExpression, clearValue, updateExpression} from '../redux/calculator';
import { evaluate } from "mathjs";

const OperatorButton = ({operator, id}) => {
    const dispatch = useDispatch();
    const displayValue = useSelector(state => state.calculator.value);
    const expression = useSelector(state => state.calculator.expression);
    const reg = /[/*+-]/; 

    const operate = () =>{
        const result =evaluate(expression+displayValue);
        dispatch(updateExpression(result));
        dispatch(clearValue());
    }

    const handleClick = (event) =>{
        const buttonClicked = event.target.textContent;
        const isOperandPresent = reg.test(expression);
        
        switch(buttonClicked){      
            case '=':
                if(displayValue!=='0'){
                    operate();
                }
                break;      
            default:
                if(!isOperandPresent){
                    dispatch(appendToExpression(displayValue));
                    dispatch(appendToExpression(buttonClicked));
                    dispatch(clearValue());
                }else{
                    operate();
                    dispatch(appendToExpression(buttonClicked));
                }
        }
    }

    return ( 
        <button className='btn btn-light' onClick={handleClick} id={id}>
            <p>
                {operator}
            </p>
        </button> 
    );
}
 
export default OperatorButton;