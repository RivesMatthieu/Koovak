import React from 'react';

const Item = ({item, onItemChange, itemSubmit}) => {
    const labels = {
        kill : {text: 'Kill'},
        accuracy : {text: 'Accuracy'},
        sum : {text: 'Go !'},
        result : {text: "Your score"} 
    }
    return (  
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <label htmlFor={labels.accuracy.text}>{labels.accuracy.text}</label>
                        <input 
                            type="number" 
                            name="accuracy" 
                            value={item.accuracy} 
                            onChange={evt => onItemChange(evt, item, "accuracy")} 
                        />
                        <label htmlFor={labels.kill.text}>{labels.kill.text}</label>
                        <input 
                            type="number" 
                            name="kill" 
                            value={item.kill} 
                            onChange={evt => onItemChange(evt, item, "kill")} 
                        />
                        <input 
                            type="button" 
                            value={labels.sum.text} 
                            onClick={evt => itemSubmit(evt, item)}
                        />
                        <label htmlFor={labels.result.text}>{labels.result.text}</label>
                        <input 
                            type="number" 
                            name="result" 
                            value={item.result} 
                            readOnly 
                        />
                </div>    
            </div>
        </React.Fragment>
    );
}
 
export default Item;