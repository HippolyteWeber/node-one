const userInfo = require(`./information`);
const cowsay = require("cowsay");
const message = `Hi my name is ${userInfo.name} and im learning js from the ${userInfo.campus} campus, im ${userInfo.age} years old `;
console.log(
  cowsay.say({
    text: `${message}`,
    e: "O_O",
    T: "U ",
  })
);
