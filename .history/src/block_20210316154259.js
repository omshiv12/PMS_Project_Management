Blockchain.prototype.getLastBlock = function(){
return this.chain[this.chain.length - 1];
}
Blockchain.prototype.createNewTransaction = function(amount, sender,
recepeint){
const newTransaction = {
amount: amount,
sender: sender,
recepeint: recepeint
};

this.pendingTransactions.push(newTransaction);


return this.getLastBlock()['index']+1;
}

bitcoin.createNewBlock(3, 'EIUF4343BKN43J4334K', 'SDFJ34OIJ34NLN34I');
bitcoin.createNewTransaction(100, 'aaa111', 'bbb111');

bitcoin.createNewBlock(3564,'EIUF4343BeuieKN43J4334K', 'SDFJ3dso4OIJ34NLN34I');
bitcoin.createNewTransaction(300, 'ccc111', 'ddd111');
bitcoin.createNewTransaction(400, 'eee111', 'fff111');
bitcoin.createNewTransaction(500, 'ggg111', 'hhh111');

console.log(bitcoin.chain[1]);

//const sha256 = require(sha256);