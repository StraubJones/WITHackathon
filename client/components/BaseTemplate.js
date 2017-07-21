let React = require('react')

class Base extends React.Component {
  render () {
    return (
      <div className='shopping-list'>
        <h1>Sexism story</h1>
        <button>Choice 1</button>
        <button>Choice 2</button>
      </div>
    )
  }
}

module.exports = Base
