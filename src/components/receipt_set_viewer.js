import Nav from 'react-bootstrap/Nav'
import React, { useState } from 'react';

import ReceiptViewer from 'components/receipt_viewer'

function ReceiptSetViewer(props) {
  
  //https://reactjs.org/docs/hooks-state.html
  const [activeTab, setActiveTab] = useState(0);
  
  const onSelectHandler = (navKey, event) => {
    setActiveTab(navKey);
    
    // let receiptElements = document.querySelectorAll("[data-user-id]");
    // let nextReceipt = document.querySelector(`[data-user-id="${navKey}"]`);
    
    // receiptElements.forEach(receiptElement => {
    //   if(receiptElement !== nextReceipt){
    //     receiptElement.classList.add("hidden");
    //   }
    // });
    
    // nextReceipt.classList.remove("hidden");
    
  }
  
  const renderNavTabItems = () => {
    return props.people.map((person) => {
      return (
        <Nav.Item key={person.name}>
          <Nav.Link
            href="#"
            eventKey={person.index}
          >
            {person.name}
          </Nav.Link>
        </Nav.Item>
      );
    });
  }
  
  const renderTabReceipts = () => {
    return props.people.map(person => {
      return (
        <div data-user-id={person.index} key={person.index} className={person.index != activeTab ? "hidden" : ""}>
          <ReceiptViewer receipt={props.receipts[person.index]}/>
        </div>
      );
    });
  }
  
  return (
    <div>
      <Nav 
        variant="pills" 
        defaultActiveKey="0"
        onSelect={onSelectHandler}
        activeKey={activeTab}
      >
        {renderNavTabItems()}
        {renderTabReceipts()}
      </Nav>
    </div>
  );
  
};

export default ReceiptSetViewer