var API = require('../lib/api-helpers')
// var Random-encounter = require('../models/random-encounter')


var Random-encountersAPI = module.exports = require('express').Router()

Random-encountersAPI.get('/random-encounters', function(req, res) {

  Random-encounter.all( req.query )
    .then( API.prep(200, res) )
    .catch( Random-encounter.NotFound, API.prep(404, res) )
    .catch( API.catchUnexpectedErrors )
})

Random-encountersAPI.post('/random-encounters', function(req, res) {

  Random-encounter.create( req.body )
    .then( API.prep(201, res) )
    .catch( Random-encounter.InvalidArgument, API.prep(400, res) )
    .catch( API.catchUnexpectedErrors)
})
