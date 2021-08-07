import React from 'react';
import ReceiptForm from 'components/form'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "Will"},
        {name: "Emmett"}
        ]
    }
  }
  
  sumbitHandler = (event, formInfo) => {
    event.preventDefault()
    console.log(formInfo);
  }
  
  render() {
    return (
      <div id='app'>
        <div id="logging">
        </div>
        <ReceiptForm 
          people={this.state.people}
          submitHandler={this.sumbitHandler}>
        </ReceiptForm>
      </div>
    );
  }
}

export default App