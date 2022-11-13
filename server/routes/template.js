let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// Connect to survey model
let templateController = require("../controllers/template.js");

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
      return res.redirect("/login");
    }
    next();
  }

/* GET Route for the Survey List page - READ Operation */
router.get("/", templateController.displayTemplateList);

/* GET Route for displaying the Add page - CREATE Operation */
// router.get("/add", requireAuth, surveyController.addpage);
//router.get("/add", templateController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
//router.post("/add", requireAuth, surveyController.addprocesspage);
//router.post("/add", templateController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, templateController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, templateController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
//router.get("/delete/:id", requireAuth, templateController.deletepage);

module.exports = router;