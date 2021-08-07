import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Checkboxes from 'components/checkbox'
import Toggle from 'components/toggle'

class ReceiptForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      cost: "",
      people: [
        {
          value: "Emmett",
          default: false,
          label: "Emmett"
        },
        {
          value: "Will",
          default: false,
          label: "Will"
        }
      ],
      selectedPeople: [false, false],
      includeSelf: true
    }
  }
  
  submitHandler = (event) => {
    let selectedPeopleInfo = []
    
    this.state.selectedPeople.forEach((selected, index) => {
      if(selected){
        selectedPeopleInfo.push(this.state.people[index])
      }
    });
    
    this.props.submitHandler(event, {
      name: this.state.name,
      cost: this.state.cost,
      selectedPeople: selectedPeopleInfo,
      includeSelf: this.state.includeSelf
    })
  }
  
  changeHandler = (event, value) => {
  
    const formField = event.target.dataset.formFieldName;
    
    const newValue = value != undefined ? value : event.target.value;
    
    this.setState({
      [formField]: newValue
    })
  }
  
  render() {
    
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Form.Group className="mb-3" controlId="form_name">
          
            <Form.Label>
              Item Name
            </Form.Label>
            
            <Form.Control 
              type="text" 
              placeholder="Enter Name"
              value={this.state.name}
              data-form-field-name="name"
              onChange={this.changeHandler}/>
            
            <Form.Text className="text-muted">
              Optional
            </Form.Text>
            
          </Form.Group> 
        
          <InputGroup className="mb-3">
            <InputGroup.Text id="cost_dollar_sign_addon">$</InputGroup.Text>
              <Form.Group className="mb-3" controlId="form_name">
              
                <Form.Label>
                  Cost
                </Form.Label>
                
                <Form.Control 
                  type="number"
                    value={this.state.cost}
                    data-form-field-name="cost"
                    onChange={this.changeHandler}/>
                
              </Form.Group> 
          </InputGroup>
          
          <div className="mb-3">
            <Checkboxes 
              checkboxes={this.state.people} 
              changeHandler={this.changeHandler} 
              name="selectedPeople"/>
          </div>
        
          <Toggle 
            checked={this.state.includeSelf} 
            changeHandler={this.changeHandler} 
            name="includeSelf"/>
          <Button 
            variant="primary" 
            type="submit">
              Add
            </Button>
        </Form>
      </div>
    );
  }
}

export default ReceiptForm