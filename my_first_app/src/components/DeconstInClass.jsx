//deconstructing in class
import React , {Component} from "react";

class DeconstInClass extends Component {
    render(){
        const {Emp_name,address} = this.props; //objecte passed


    return <h1>Hello Mr {Emp_name} from {address}</h1> 
    
    }
   
        
        
    
}
export default DeconstInClass