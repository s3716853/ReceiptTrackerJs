import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Checkbox(props) {
    
    //Pass checkboxes array of options, default is the default value 
    const initialCheckboxes = props.checkboxes.map(checkboxOptions => {
        return checkboxOptions.default ? checkboxOptions.default : false;
    });
    
    //https://reactjs.org/docs/hooks-state.html
    const [checked, setChecked] = useState(initialCheckboxes);
        
    const changeHandler = (event) => {
        const checkboxId = event.target.dataset.checkboxId;
        
        let updatedCheckboxes = checked.slice(0);
        updatedCheckboxes[checkboxId] = event.target.checked
        
        setChecked(updatedCheckboxes);
        props.changeHandler(event, updatedCheckboxes);
    }
    
    const checkboxElements = props.checkboxes.map((checkboxOptions, index) => {
      return (
            <Form.Check
                key={checkboxOptions.value}
                type="checkbox"
                id={checkboxOptions.id ? checkboxOptions.id : ""}
                label={checkboxOptions.label}
                data-checkbox-id={index}
                data-form-field-name={props.name}
                onChange={changeHandler}>
            </Form.Check>
        );
    })
    
    return (
        <div>
            {checkboxElements}
        </div>
    );
}

export default Checkbox