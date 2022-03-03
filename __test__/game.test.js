const Game = require('../src/game').default

//const fs = require('fs')

// describe('App', () => {
//   it('Contains the compiled JavaScript', async (done) => {
//     fs.readFile('./public/main.js', 'utf8', (err, data) => {
//       expect(err).toBe(null)
//       expect(data).toMatchSnapshot()
//       done()
//     })
//   })
// })

describe('Game', () => {
  
  let game, p1, p2
  beforeEach(() => {
    p1 = 'Salem'
    p2 = 'Nate'
    game = new Game(p1, p2)
  })

  describe('Game', () => {
    it('Initializes with two players', async () => {
      expect(game.p1).toBe('Salem')
      expect(game.p2).toBe('Nate')
    })

    
  })

  
})
