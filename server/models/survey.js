let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a model class
let surveyModel = mongoose.Schema({
    templateID: String,
    templateName: String,
    Q1: String,
    AQ1: String,
    Q2: String,
    AQ2: String,
    Q3: String,
    AQ3: String,
    Q4: String,
    AQ4: String,
    Q5: String,
    AQ5: String,
    Q6: String,
    AQ6: String,
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);