const ArgumentType = require('../../extension-support/argument-type')
const BlockType = require('../../extension-support/block-type')

class Test {
  constructor () {}

  getInfo () {
    return {
      id: 'localstorage',
      name: 'LocalStorage',

      blocks: [
        {
          opcode: 'moveAnimation',

          blockType: BlockType.COMMAND,

          text: 'go to [X] [Y] with [FIRSTFRAME]to[LASTFRAME]animation',
          arguments: {
            X: {
              type: ArgumentType.number,
              defaultValue: '0'
            },
            FIRSTFRAME: {
              type: ArgumentType.number,
              defaultValue: '0'
            },
            LASTFRAME: {
              type: ArgumentType.number,
              defaultValue: '0'
            },
            Y: {
              type: ArgumentType.number,
              defaultValue: '0'
            }
          }
        }
      ]
    }
  }



  moveAnimation ({ X, Y, FIRSTFRAME, LASTFRAME }) {
    return alert(X + Y + FIRSTFRAME + LASTFRAME)
  }
}

module.exports = Test