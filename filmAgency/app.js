var db = require("./models/index");

// console.log("db.Actor", db.Actor);
// console.log("db.Movie", db.Movie);

db.Actor.create({name:"Yin"});
db.Movie.create({title:"LUNCH"});
