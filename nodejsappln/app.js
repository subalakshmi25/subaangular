let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Subasundar@25",
  database: "user"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT value FROM data1 ORDER BY value DESC LIMIT 4,1", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
