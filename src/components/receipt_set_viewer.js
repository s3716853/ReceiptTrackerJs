import Nav from 'react-bootstrap/Nav'
import React, { useState } from 'react';

function ReceiptSetViewer(props) {
  
  //https://reactjs.org/docs/hooks-state.html
  const [activeTab, setActiveTab] = useState(0);
  
  const onSelectHandler = (navKey, event) => {
    setActiveTab(navKey);
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
  
  return (
    <div>
      <Nav 
        variant="pills" 
        defaultActiveKey="0"
        onSelect={onSelectHandler}
        activeKey={activeTab}
      >
        {renderNavTabItems()}
      </Nav>
    </div>
  );
  
};

export default ReceiptSetViewer