const { GENESIS_DATA,MINE_RATE } = require('./config.js');
const hexToBinary=require('hex-to-binary');
const cryptoHash = require('./crypto-hash.js');

class Block {
    constructor({ timestamp, prevHash, hash, data,nonce,difficulty }) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
        this.nonce=nonce;
        this.difficulty=difficulty;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ prevBlock, data }) {
        let timestamp,hash;
        const prevHash = prevBlock.hash;
        let {difficulty}=prevBlock;
        let nonce=0;
        do{
            nonce++;
            timestamp=Date.now();
            difficulty=Block.ajdustDifficulty({originalBlock:prevBlock,timestamp});
            hash=cryptoHash(timestamp,prevHash,nonce,difficulty,data);
        }
        while(hexToBinary(hash).substring(0,difficulty)!=='0'.repeat(difficulty));
        return new this({
            timestamp,
            prevHash,
            hash,
            difficulty,
            nonce,
            data,
        });
    }
    static ajdustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;
        if (difficulty < 1) return 1;
        const difference = timestamp - originalBlock.timestamp;
        if (difference > MINE_RATE) return difficulty - 1;
        return difficulty + 1;
      }
}

const block1 = new Block({ timestamp: '16/04/2024', prevHash: '0xahg4', hash: 'oxajfjf', data: 'eth' });

const genesisBlock=Block.genesis();



module.exports = Block;
