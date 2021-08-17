const mongoose = require("mongoose");

const ROLE_USER = "user";
const ROLE_PLAYER = "player";
const ROLE_ADMIN = "admin";

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

exports.ROLE_USER = ROLE_USER;
exports.ROLE_PLAYER = ROLE_PLAYER;
exports.ROLE_ADMIN = ROLE_ADMIN;

module.exports = Role;