// MongoDB custom connection module.
const MongoClient = require('mongodb').MongoClient;
const models = {};

models.MongoClient = MongoClient;

module.exports = models;