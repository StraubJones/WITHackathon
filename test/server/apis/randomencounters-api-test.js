require(TEST_HELPER)
// var db = require(__server + '/lib/knex-driver')
var request = require('supertest-as-promised')
var RandomencountersAPI = require(__server + '/apis/randomencounters-api.js')

describe('Randomencounters API', function () {
  var app = TestHelper.createApp()

  //
  // Simulate a signed-in user by hardcoding a value.
  // This allows us to test without hitting any APIs / databases for sessions.
  //
  var mock = { user: null }

  app.use(function (req, res, next) {
    req.user = mock.user
    next()
  })
  app.use('/', RandomencountersAPI)
  app.testReady()

  beforeEach_(function * () {
    mock.user = { id: 10, name: 'Alice', email: 'alice@example.com' }
    // yield db.deleteEverything()
  })

  it_('creates and retrieves a randomencounter by collection', function * () {
    var newRandomencounterAttrs = { /* TODO: FILL IN */ }
    var createdRandomencounter = null

    yield request(app)
      .post('/randomencounters')
      .send(newRandomencounterAttrs)
      .expect(201)
      .expect(function (response) {
        createdRandomencounter = response.body

        expect(createdRandomencounter.id).to.be.a('number')
        expect(createdRandomencounter).to.containSubset(newRandomencounterAttrs)
      })

    yield request(app)
      .get('/randomencounters')
      .expect(200)
      .expect(function (response) {
        expect(response.body).to.deep.equal(createdRandomencounter)
      })
  })
})
