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
    let newSurvey = Survey({
      gender: req.body.gender,
      age: req.body.age,
      annual_income: req.body.annual_income,
      marital_status: req.body.marital_status,
      employment_status: req.body.employment_status,
      education_level: req.body.education_level,
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
      gender: req.body.gender,
      age: req.body.age,
      annual_income: req.body.annual_income,
      marital_status: req.body.marital_status,
      employment_status: req.body.employment_status,
      education_level: req.body.education_level,
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