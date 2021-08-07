import React from 'react';
import ReceiptForm from 'components/form'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <div id='app'>
        <ReceiptForm />
      </div>
    );
  }
}

export default App