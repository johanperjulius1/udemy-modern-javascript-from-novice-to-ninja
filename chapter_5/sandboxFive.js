// // 5.37, 5.38, 5.39 Creating an object literal & Adding Methods
let rainman = {
  realName: "Johnny",
  age: 16,
  email: 'will never say',
  favouriteGame: "BlackJack of course",
  biggestWins: [4200, 663],
  login: () => {
    console.log('rainman is at the table ready to play')
  },
  logBlogs: () => {
    console.log(biggestWins)
  }
};

rainman.logBlogs()

