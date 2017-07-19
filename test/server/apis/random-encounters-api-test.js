require(TEST_HELPER)
// var db = require(__server + '/lib/knex-driver')
var request = require('supertest-as-promised')
var Random-encountersAPI = require(__server + '/apis/random-encounters-api.js')


describe('Random-encounters API', function() {

  var app = TestHelper.createApp()

  //
  // Simulate a signed-in user by hardcoding a value.
  // This allows us to test without hitting any APIs / databases for sessions.
  //
  var mock = { user: null }

  app.use(function(req, res, next) {
    req.user = mock.user
    next()
  })
  app.use('/', Random-encountersAPI)
  app.testReady()


  beforeEach_(function * () {
    mock.user = { id: 10, name: 'Alice', email: 'alice@example.com' }
    // yield db.deleteEverything()
  })

  it_('creates and retrieves a random-encounter by collection', function * () {
    var newRandom-encounterAttrs = { /* TODO: FILL IN */ }
    var createdRandom-encounter = null

    yield request(app)
      .post('/random-encounters')
      .send(newRandom-encounterAttrs)
      .expect(201)
      .expect(function(response) {
        createdRandom-encounter = response.body

        expect( createdRandom-encounter.id ).to.be.a('number')
        expect( createdRandom-encounter ).to.containSubset(newRandom-encounterAttrs)
      })

    yield request(app)
      .get('/random-encounters')
      .expect(200)
      .expect(function (response) {
        expect( response.body ).to.deep.equal( createdRandom-encounter )
      })
  })
})
