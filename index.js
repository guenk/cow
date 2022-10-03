const news = require('./information');
console.log(news)
const cowsay = require('cowsay');
console.log(cowsay.say({
    text: `hi, may name is ${news.name} and work in ${news.campus}`,
    e: "oO",
    T: "U "
}));