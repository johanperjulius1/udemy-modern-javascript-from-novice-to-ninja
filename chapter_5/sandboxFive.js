// // 5.37, 5.38, 5.39 5.40 Creating an object literal & Adding Methods & This Keyword
let rainman = {
  realName: "Johnny",
  age: 16,
  email: "will never say",
  favouriteGame: "BlackJack of course",
  blogs: [{ title: "why I love football", likes: 30,}
      ],
  login: () => {
    console.log("rainman is at the table ready to play");
  },
  logWins: function () {
    // console.log(this.blogs[0]);
    console.log("rainmans biggest wins to date are:");
    this.blogs.forEach((biggestWin) => {
      console.log(biggestWin.title, biggestWin.likes);
    });
  },
};

rainman.logWins();
// console.log(this);

// const blogs = [
//   {
//     title: "why I love football",
//     likes: 30,
//   },
// ];
