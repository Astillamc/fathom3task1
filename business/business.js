import persistence from "../persistence/persistence";

async function populate(request, response, next) {
  try {
    const numberOfJokes = await persistence.count();
    if (numberOfJokes > 0) {
      await persistence.resetJokesTable()
    }
    await persistence.populate()
    response.send("Populado correctamente");    
  } catch (error) {
    response.send("Error populando tabla");
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getJoke(request, response, next) {
  try {
    const numberOfJokes = await persistence.count();
    const jokeId = getRandomInt(numberOfJokes);
    const joke = await persistence.getJokePersistence(jokeId);
    response.send(JSON.stringify(joke));  
  } catch (error) {
    response.send("Error obteniendo broma");
  }
}

export default {
  populate,
  getJoke
};


