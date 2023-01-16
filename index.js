// const db = require("mysql")

// const options = {
//     host: 'localhost',
//     password: 'faisal81',
//     user: 'root'
// }

// const database = db.createPool(options, (err) => {

// })

// database.query("INSERT INTO LOGIN.USERS VALUES('Rafe', 'hjwdhjfsdyudfyu')", (err, results) => {
//     console.log(results)
// })
const db = require("mysql");

const kim = {
  host: "localhost",
  password: "faisal81",
  user: "root",
};

const faisal = db.createPool(kim);

function name() {
  console.log("Here is your data");
}
module.exports = { name };
