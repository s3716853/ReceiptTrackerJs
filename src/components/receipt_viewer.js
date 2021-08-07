function ReceiptViewer(props) {
  return (
    <div>
      <ReceiptForm 
        people={this.state.people}
        submitHandler={this.sumbitHandler}>
      </ReceiptForm>
    </div>
  );
}

export default ReceiptViewer