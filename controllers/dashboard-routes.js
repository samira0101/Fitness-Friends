// Dependencies
// the router and the database
const router = require("express").Router();
const sequelize = require("../config/connection");
// the models
const { Post, User, Comment } = require("../models");
// Unauthenticated users are redirected to the login page via the authorisation middleware.
const withAuth = require("../utils/auth");

