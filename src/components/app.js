import React from 'react';

import ReceiptForm from 'components/form'
import ReceiptSetViewer from 'components/receipt_set_viewer'

import ReceiptLine from 'models/receipt_line'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "Will", index: 0},
        {name: "Emmett", index: 1},
        {name: "Brandon", index: 2},
      ],
      //States cannot have objects within them
      receipts: [
        [],
        [],
        []
      ]
    }
  }
  
  sumbitHandler = (event, formInfo) => {
    event.preventDefault()
    
    //Slice as you need to make a new array for the DOM
    let newReceipts = this.state.receipts.slice(0);
    let receiptLine = new ReceiptLine(formInfo.name, formInfo.cost, formInfo.selectedPeople, formInfo.includeSelf)
    
    formInfo.selectedPeople.forEach((person) => {
      newReceipts[person.index].push(receiptLine);
    })
    
    this.setState({
      receipts: newReceipts
    })
  }
  
  receiptsRender = () =>{
    return this.state.people.map(person => {
      return (
        <div>
          {this.state.person.name}
          {this.state.receipts[person.index]}
        </div>
        )
    });
  }
  
  render() {
    return (
      <div id='app'>
        <div id="logging">
        </div>
        <div className="main-content">
          <div>
            <ReceiptForm 
              people={this.state.people}
              submitHandler={this.sumbitHandler}
            >
            </ReceiptForm>
          </div>
          <div>
            <ReceiptSetViewer 
              people={this.state.people}
              receipts={this.state.receipts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App