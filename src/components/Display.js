const Display = ({expression, value}) => {
    return ( 
        <div className="display">
            <p className="expression">
                {expression}
            </p>
            <p className="value">
                {value}
            </p>
        </div>
    );
}
 
export default Display;