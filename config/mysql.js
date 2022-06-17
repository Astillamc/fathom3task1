const mysql = require("mysql");

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fathom3',
  character: 'utf8mb4'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("BD Connected!");
});

async function mysqlQuery(query) {
  try {
    console.log(query);
    return new Promise(function(resolve, reject) {
      db.query(query, function(err, rows, fields) {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  } catch (error) {
    console.log("Error ejecutando query: " + error);
  }
}

export default {
  mysqlQuery
};
