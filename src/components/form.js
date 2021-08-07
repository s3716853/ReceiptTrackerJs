import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ReceiptForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="form_name">
          
            <Form.Label>
              Item Name
            </Form.Label>
            
            <Form.Control type="text" placeholder="Enter Name"/>
            
            <Form.Text className="text-muted">
              Optional
            </Form.Text>
            
          </Form.Group> 
        </Form>
        <Button variant="primary">Test</Button>
      </div>
    );
  }
}

export default ReceiptForm