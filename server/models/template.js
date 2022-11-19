let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a model class
let templateModel = mongoose.Schema({
    Name: String,
    Description: String,
    Q1: String,
    Q2: String,
    Q3: String,
    Q4: String,
    Q5: String,
    Q6: String,
    A1Q1: String,
    A2Q1: String,
    A3Q1: String,
    A4Q1: String,
    A1Q2: String,
    A2Q2: String,
    A3Q2: String,
    A4Q2: String,
    A1Q3: String,
    A2Q3: String,
    A3Q3: String,
    A4Q3: String,
    A1Q4: String,
    A2Q4: String,
    A3Q4: String,
    A4Q4: String,
    A1Q5: String,
    A2Q5: String,
    A3Q5: String,
    A4Q5: String,
    A1Q6: String,
    A2Q6: String,
    A3Q6: String,
    A4Q6: String,
},
{
    collection: "templates"
});

module.exports = mongoose.model('Template', templateModel);