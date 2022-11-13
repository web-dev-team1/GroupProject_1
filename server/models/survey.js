let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a model class
let surveyModel = mongoose.Schema({
    gender: String,
    age: String,
    marital_status: String,
    annual_income: String,
    employment_status: String,
    education_level: String,
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);