const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

require("dotenv/config")
const cors = require("cors");

const seed = require("./src/seeds/initials");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

/*
Middlewares
 */
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/*
Set server Port
 */
const PORT = process.env.LOCAL_SERVER_PORT || 8082;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//const db = require("./src/models");

/*
Connexion to MongoDB database
 */
mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then( () => {
    console.log("Successfully connected to Mongodb");
    seed.initial();
})
.catch( err => {
    console.log("Connexion error " + err);
    process.exit();
});

/*
Swagger route (api documentation)
 */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

/*
routes
 */
require("./src/routes/userRoutes")(app);