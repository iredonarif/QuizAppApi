const Role = require("../models/role");

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

exports.initial = initial;