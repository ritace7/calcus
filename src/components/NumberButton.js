import { useSelector, useDispatch} from "react-redux";
import { updateValue, clearValue,appendToValue, clearExpression } from '../redux/calculator';

const NumberButton = ({num}) => {
    const dispatch = useDispatch();
    const displayValue = useSelector(state => state.calculator.value);
    
    const handleClick = (event) =>{
        const buttonClicked = event.target.textContent; 
        switch(buttonClicked){
            case 'C':
                dispatch(clearValue());
                dispatch(clearExpression());
                break;
            case '.':
                if(!displayValue.includes('.')){
                    dispatch(appendToValue(buttonClicked))
                }
                break;
            default:
                if(displayValue === '0'){
                    dispatch(updateValue(buttonClicked));
                }else{
                    dispatch(appendToValue(buttonClicked));
                }
        }
    }

    return ( 
    <button className='btn btn-dark ' onClick={handleClick}>
        {num}
    </button> );
}
 
export default NumberButton;