import mysql from "../config/mysql";
const jokes = require("../json/jokes.json");

async function getJokePersistence(jokeId) {
  const query = `SELECT * FROM jokes WHERE id = ${jokeId}`;
  const joke = await mysql.mysqlQuery(query);
  console.log("Hemos acabado");
  return joke[0];
}

async function resetJokesTable() {
  const query = `DELETE FROM jokes `;
  await mysql.mysqlQuery(query);
  console.log("Tabla Jokes reseteada");
}

async function populate() {
  jokes.map(async item => {
    const punchlineScaped = item.punchline.replace(/[\\$'"]/g, "\\$&");
    const setupScaped = item.setup.replace(/[\\$'"]/g, "\\$&");
    const query = `INSERT IGNORE INTO jokes (id, type, setup, punchline) VALUES ( ${item.id}, "${item.type}", "${setupScaped}", "${punchlineScaped}" );`;
    mysql.mysqlQuery(query);
  });
}
async function count() {
  const query = `SELECT COUNT(id) AS jokesNumber FROM jokes;`;
  const queryResponse = await mysql.mysqlQuery(query);
  console.info(`hay ${queryResponse[0].jokesNumber} bromas`);
  return queryResponse[0].jokesNumber;
}

export default {
  resetJokesTable,
  populate,
  getJokePersistence,
  count
};
