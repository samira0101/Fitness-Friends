// User Model

// Dependencies
// use Model and Datatype from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// use bcrypt for password hashing
const bcrypt = require('bcrypt');

// create the User model
class User extends Model {
    // Create a method that runs on a user instance and checks the password.
    // in the login route against the hashed database password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
