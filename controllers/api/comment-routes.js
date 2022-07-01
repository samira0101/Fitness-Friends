// Dependencies
// Express.js connection
const router = require("express").Router();
// Comment model
const { Comment } = require("../../models");
// Authorization Helper
const withAuth = require("../../utils/auth");
