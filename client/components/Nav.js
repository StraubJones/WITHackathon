const React = require('react')
const Link = require('react-router').Link

class Nav extends React.Component {
  render () {
    return (
      <div className='nav'>
        <Link activeClassName='active-nav' to='/' >Start</Link>
      </div>
    )
  }
};
/*
<Link className='nav-last' activeClassName='active-nav' to='/contact'>Contact</Link>
<Link activeClassName='active-nav' to='/about'>About the Project</Link>
<Link activeClassName='active-nav' to='/now'>Random Encounter</Link>
<Link activeClassName='active-nav' to='/training'>Training</Link>
*/

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <p className='copyright'>Copyright 2017©</p>
        <a href='https://github.com/StraubJones/WITHackathon'><img src='./images/footer/GitHub.svg' /></a>
      </div>
    )
  }
};
const Container = (props) =>
  <div>
    <Nav />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>

module.exports = Container
