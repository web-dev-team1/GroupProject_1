let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Create reference to the model
let Survey = require("../models/survey");
let Template = require("../models/template");

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err) {
            return console.error(err);
        } else {
            res.render("survey/list",
            {title: "Survey List",
            SurveyList: surveyList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.addpage = (req, res, next) => {
    // res.render("survey/add", {
    //   title: "Survey",
    //   displayName: req.user ? req.user.displayName : "",
    // });

    let id = req.params.id; //id of actual object
  
    Template.findById(id, (err, addpage) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("survey/add", { title: "Survey", template: addpage, 
        displayName: req.user ? req.user.displayName : '' });
      }
    });
  };
  
  module.exports.addprocesspage = (req, res, next) => {
    let id = req.params.id; //id of actual object
    let newSurvey = Survey({
      templateID: req.body.templateID,
      templateName: req.body.templateName,
      Q1: req.body.Q1,
      AQ1: req.body.AQ1,
      Q2: req.body.Q2,
      AQ2: req.body.AQ2,
      Q3: req.body.Q3,
      AQ3: req.body.AQ3,
      Q4: req.body.Q4,
      AQ4: req.body.AQ4,
      Q5: req.body.Q5,
      AQ5: req.body.AQ5,
      Q6: req.body.Q6,
      AQ6: req.body.AQ6,
    });
    Survey.create(newSurvey, (err, Survey) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the survey list
        res.redirect("/survey-list");
      }
    });
  };
  
  module.exports.displayeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    Survey.findById(id, (err, surveytoedit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("survey/edit", { title: "Edit Survey", survey: surveytoedit, 
        displayName: req.user ? req.user.displayName : '' });
      }
    });
  };
  
  module.exports.processingeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatesurvey = Survey({
      _id: id,
      templateID: req.body.templateID,
      templateName: req.body.templateName,
      Q1: req.body.Q1,
      AQ1: req.body.AQ1,
      Q2: req.body.Q2,
      AQ2: req.body.AQ2,
      Q3: req.body.Q3,
      AQ3: req.body.AQ3,
      Q4: req.body.Q4,
      AQ4: req.body.AQ4,
      Q5: req.body.Q5,
      AQ5: req.body.AQ5,
      Q6: req.body.Q6,
      AQ6: req.body.AQ6,
    });
    Survey.updateOne({ _id: id }, updatesurvey, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey list
        res.redirect("/survey-list");
      }
    });
  };
  
  module.exports.deletepage = (req, res, next) => {
    let id = req.params.id;
    Survey.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh contact list
        res.redirect("/survey-list");
      }
    });
  };