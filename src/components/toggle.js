import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Toggle(props) {
    
    //https://reactjs.org/docs/hooks-state.html
    const [checked, setChecked] = useState(props.checked);
    
    const changeHandler = (event) => {
        setChecked(event.target.checked);
        props.changeHandler(event, event.target.checked);
    }
    
    return (
        <Form.Check
            type="switch"
            id="toggle_self_switch"
            label="Include Self in Calculations"
            checked={props.checked}
            data-form-field-name={props.name}
            onChange={changeHandler}>
        </Form.Check>
    );
}

export default Toggle