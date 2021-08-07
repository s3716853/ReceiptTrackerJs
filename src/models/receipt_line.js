class ReceiptLine {
    
    //name - name of the item
    //cost - cost of the ite
    //numbrSplti - number of people (other than user) to split by
    //includesSelf - whether the user is included in the split
    constructor(name, cost, numberSplit, includesSelf){
        this.name = name;
        this.cost = cost;
        this.numberSplit = numberSplit;
        this.includesSelf = includesSelf;
    }
    
    asObject = () => {
        let cost = parseFloat(this.cost); 
        
        let splitAmount = this.includesSelf ? this.numberSplit + 1 : this.numberSplit;
        
        let split = cost / splitAmount;
        
        return {
            name: this.name,
            totalCost: this.cost,
            amountOwed: split,
            includesUser: this.includesSelf
        }
    }
}

export default ReceiptLine;