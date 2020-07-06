/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require('crypto-js/sha256')

/**
 * Class with a constructor for block
 */
class Block {
  constructor(data) {
    this.id = 0
    this.nonce = 144444
    this.body = data
    this.hash = ''
  }

  generateHash() {
    let self = this

    return new Promise(function (resolve, reject) {
      const data = JSON.stringify(self)
      self.hash = SHA256(data).toString()
      resolve(self)
    })
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block
