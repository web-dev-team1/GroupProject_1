let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Create reference to the model
let Template = require("../models/template");

module.exports.displayTemplateList = (req, res, next) => {
    Template.find((err, templateList) => {
        if(err) {
            return console.error(err);
        } else {
            res.render("templates/list",
            {title: "Template List",
            TemplateList: templateList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
};
  
  module.exports.displayeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    Template.findById(id, (err, templatetoedit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("templates/edit", { title: "Edit", template: templatetoedit, 
        displayName: req.user ? req.user.displayName : '' });
      }
    });
  };
  
  module.exports.processingeditpage = (req, res, next) => {
    let id = req.params.id; //id of actual object
  
    let updatetemplate = Template({
      _id: id,
      Name: req.body.Name,
      Description: req.body.Description,
      Q1: req.body.Q1,
      A1Q1: req.body.A1Q1,
      A2Q1: req.body.A2Q1,
      A3Q1: req.body.A3Q1,
      A4Q1: req.body.A4Q1,
      Q2: req.body.Q2,
      A1Q2: req.body.A1Q2,
      A2Q2: req.body.A2Q2,
      A3Q2: req.body.A3Q2,
      A4Q2: req.body.A4Q2,
      Q3: req.body.Q3,
      A1Q3: req.body.A1Q3,
      A2Q3: req.body.A2Q3,
      A3Q3: req.body.A3Q3,
      A4Q3: req.body.A4Q3,
      Q4: req.body.Q4,
      A1Q4: req.body.A1Q4,
      A2Q4: req.body.A2Q4,
      A3Q4: req.body.A3Q4,
      A4Q4: req.body.A4Q4,
      Q5: req.body.Q5,
      A1Q5: req.body.A1Q5,
      A2Q5: req.body.A2Q5,
      A3Q5: req.body.A3Q5,
      A4Q5: req.body.A4Q5,
      Q6: req.body.Q6,
      A1Q6: req.body.A1Q6,
      A2Q6: req.body.A2Q6,
      A3Q6: req.body.A3Q6,
      A4Q6: req.body.A4Q6,

    });
    Template.updateOne({ _id: id }, updatetemplate, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the survey list
        res.redirect("/template-list");
      }
    });
  };
  