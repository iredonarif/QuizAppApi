const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config")
const cors = require("cors");

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

const PORT = process.env.LOCAL_SERVER_PORT || 8082;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const db = require("./src/models");
const Role = db.role;

db.mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then( () => {
    console.log("Successfully connected to Mongodb");
    initial();
})
.catch( err => {
    console.log("Connexion error " + err);
    process.exit();
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            // add user role
            new Role({
                name: "user",
            }).save( err => {
                if (err) { console.log("error", err) }
            });

            // add admin role
            new Role({
                name: "admin",
            }).save( err => {
                if (err) { console.log("error", err) }
            });

            // add player
            new Role({
                name: "player",
            }).save( err => {
                if (err) { console.log("error", err) }
            });
        }
    })
}

// routes
require("./src/routes/userRoutes")(app);