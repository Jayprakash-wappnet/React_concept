import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler(){
    console.log('Button Hit...');
  }
  render() {
    return (
      <div>
        <button onClick={ this.clickHandler }>Click here</button>
      </div>
    )
  }
}

export default ClassClick
