import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

    return this.state.isLoggedIn && <div>Hello Aryan!!! you are logged in</div>
    //this is third method Ternary conditional operator

    // return this.state.isLoggedIn ? (
    //   <div> Hello Aryan!!! you are logged in </div>
    // ) : (
    //   <div> Oops!! Please Log in </div>
    // );

    //this is second method of conditional rendering using element variable

    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Hello Aryan!!! you are logged in</div>
    // }
    // else
    // {
    //   message = <div>Oops!! Please Log in</div>
    // }
    // return <div>{message}</div>

    // this is Conditional rendor usinf If/else

    // if (this.state.isLoggedIn) {
    //   return <div>Hello Aryan!!! you are logged in</div>;
    // } else {
    //   return <div>Oops!! Please Log in</div>;
    // }
  }
}

export default UserGreeting;
