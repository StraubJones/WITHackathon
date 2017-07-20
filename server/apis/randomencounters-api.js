var API = require('../lib/api-helpers')
// var Randomencounter = require('../models/random-encounter')

var RandomencountersAPI = module.exports = require('express').Router()

RandomencountersAPI.get('/random-encounters', function (req, res) {
  Randomencounter.all(req.query)
    .then(API.prep(200, res))
    .catch(Randomencounter.NotFound, API.prep(404, res))
    .catch(API.catchUnexpectedErrors)
})

RandomencountersAPI.post('/random-encounters', function (req, res) {
  Randomencounter.create(req.body)
    .then(API.prep(201, res))
    .catch(Randomencounter.InvalidArgument, API.prep(400, res))
    .catch(API.catchUnexpectedErrors)
})
