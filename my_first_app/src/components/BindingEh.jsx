import React, { Component } from 'react'

class BindingEh extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message : 'Hello team'
      }

      this.clickHandler = this.clickHandler.bind(this);
    }
      // below method is binding in construction this is Best metho for binding
    clickHandler(){
        this.setState({
            message : 'Byy team'
        })
        console.log(this);

    }



    //this method of binding using write class property as arrow function
    // clickHandler = () => {
    //   this.setState({
    //     message : 'Good by team'
    //   })
    // }
    
  render() {
    return (
      <div>
            <div>{this.state.message}</div>
            {/* binding method-1 using  ".bind()this"
            <button onClick={this.clickHandler.bind(this)}>Click</button>  */}

            {/* binding using arrow function */}

            {/* <button onClick={ () => this.clickHandler()}>Click </button> */}

            <button onClick={this.clickHandler}> Click Me</button>
      </div>
    )
  }
}

export default BindingEh
