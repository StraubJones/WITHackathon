let React = require('react')
let ReactDOM = require('react-dom')

// React Router elements
const Router = require('react-router').Router
const Route = require('react-router').Route
const IndexRoute = require('react-router').IndexRoute
const browserHistory = require('react-router').browserHistory
console.log(browserHistory);

// Components
let Landing = require('./components/Landing.js')
let Nav = require('./components/Nav.js')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Nav}>
      <IndexRoute component={Landing} />
      <Route path='/start' component={Landing} />
    </Route>
  </Router>,
  document.getElementById('app')
)

/*
More elements to potentially use later
<Route path="/training" component={Training}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>

*/
