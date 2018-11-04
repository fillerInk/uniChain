const SHA256 = require("crypto-js/sha256");


class fundTransferBlock {
    constructor(index, timestamp, aadhar, amount, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
		this.aadhar = aadhar;
        this.amount = amount;
        this.hash = this.calculateHash();
	
    }

    calculateHash() {
      return SHA256(this.index + 
	  this.previousHash + this.timestamp + JSON.stringify(this.aadhar) +
	  JSON.stringify(this.amount)).toString();
    }
	
	
}


class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2018", "Genesis block","000000","00000000","0")
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash; 
        newBlock.hash = newBlock.calculateHash();
        
		this.chain.push(newBlock);
		
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
	
	getCountOne() {
		return countOne;
	}
	getCountTwo() {
	    return countTwo;
	}
}

let fundTransferBlockchain = new Blockchain();
fundTransferBlockchain.addBlock(new Block(1, "20/07/2017", "1234-2345-3456","1000")); // Here the variable 1 and 2
fundTransferBlockchain.addBlock(new Block(2, "20/07/2017", "2345-3456-4567","2000" )); // specifies certain candidates



