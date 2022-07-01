// An index file that collects API routes and exports them for use

// Dependencies
// Server connection
const router = require("express").Router();
// User Routes
const userRoutes = require("./user-routes");
// Post Routes
const postRoutes = require("./post-routes");
// Comment Routes
const commentRoutes = require("./comment-routes");
