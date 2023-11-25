import { useSelector, useDispatch} from "react-redux";
import { updateValue, clearValue,appendToValue, clearExpression } from '../redux/calculator';

const NumberButton = ({num}) => {
    const dispatch = useDispatch();
    const displayValue = useSelector(state => state.calculator.value);
    
    const handleClick = (event) =>{
        const buttonClicked = event.target.textContent;
        let isLimitExceeded = false;
        if(displayValue.length===9){
            isLimitExceeded = true;
        } 

        switch(buttonClicked){
            case 'AC':
                dispatch(clearValue());
                dispatch(clearExpression());
                break;
            case '.':
                if(!displayValue.includes('.') && !isLimitExceeded){
                    dispatch(appendToValue(buttonClicked))
                }
                break;
            case 'DEL':
                if(displayValue !== '0'){
                    let deletedVal = displayValue.slice(0,-1);
                    if(!deletedVal){
                        dispatch(updateValue('0'));
                    }else{
                        dispatch(updateValue(deletedVal));
                    }
                }    
                break;
            default:
                if(displayValue === '0'){
                    dispatch(updateValue(buttonClicked));
                }else if(!isLimitExceeded){
                    dispatch(appendToValue(buttonClicked));
                }
        }
    }

    return ( 
    <button className='btn btn-dark ' onClick={handleClick} id={num}>
        {num}
    </button> );
}
 
export default NumberButton;