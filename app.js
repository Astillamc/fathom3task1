const express = require('express')
const app = express()
const port = 3000
const routerApi = require("./routes/api");

const cors = require("cors");
app.use(cors());

//Conectamos con la api
app.use("/api", routerApi);

app.listen(port, () => {
  console.log(`Fathom3 app listening on port ${port}`)
})