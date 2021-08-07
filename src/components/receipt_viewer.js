import Table from 'react-bootstrap/Table'

function ReceiptViewer(props) {
  
  const renderReceipt = () => {
    return props.receipt.map((receiptLine, index) => {
      receiptLine = receiptLine.exportObject();
      return (
        <tr key="index">
          <td>{receiptLine.name}</td>
          <td>{receiptLine.totalCost}</td>
          <td>{receiptLine.amountOwed}</td>
        </tr>
      );
    });
  }
  
  return (
    <Table striped variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Full Cost</th>
          <th>Owed Amount</th>
        </tr>
      </thead>
      <tbody>
        {renderReceipt()}
      </tbody>
    </Table>
  );
}

export default ReceiptViewer