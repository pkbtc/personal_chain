const Block=require('./block');
const cryptoHash = require('./crypto-hash');

class Blockchain{
    constructor(){
        this.chain=[Block.genesis()];
    }

    addBlock({data}){
        const newBlock=Block.mineBlock({
            prevBlock:this.chain[this.chain.length-1],
            data
        })
        this.chain.push(newBlock);
    }
    static isValidationChain(chain){
        if(JSON.stringify(chain[0])!==JSON.stringify(Block.genesis())){
            return false;
        }
        for(let i=1;i<chain.length;i++){
            const {timestamp,prevHash,hash,nonce,difficulty,data}=chain[i];
            const realLastHash=chain[i-1].hash;
            if(prevHash!==realLastHash){
                return false;
            }
            const validHash=cryptoHash(timestamp,prevHash,nonce,difficulty,data);
            if(hash!==validHash){
                return false;
            }
        }
        return true;

    }
    replaceChain(chain){
        if(chain<=this.chain.length){
            console.error("the incoming chain is not the longest chain");
            return;
        }
        if(!Blockchain.isValidationChain(chain)){
            console.error("the incoming chain is not valid")
        }
        this.chain=chain;
    }
}


const blockchain=new Blockchain();
blockchain.addBlock({data:"block1"});
blockchain.addBlock({data:"block2"});
blockchain.addBlock({data:"Block3"})
blockchain.addBlock({data:"Block4"})
blockchain.addBlock({data:"Block5"})
const result=Blockchain.isValidationChain(blockchain.chain);


console.log(blockchain);
console.log(result)



module.exports=Blockchain;

