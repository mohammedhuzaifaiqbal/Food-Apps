import Profile from "./ProfileClass";
import ProfilefunctionalComponents from "./Profile"
import {Component} from "react";
import UserContext from "../utils/UserContext";

//import Profile from "./Profile";


class About extends Component {
   constructor(props){
      super(props);
      console.log("Parent-constructor");
   }
   componentDidMount() {
      // Best place to make an Api call 
      console.log("Parent-componentDidMount");
   }
   render(){
      console.log("Parent - render");
      return (
         <div>
   <h1>About  us page</h1>
   <UserContext.Consumer>
     {/**(value)=>console.log(value)*/}
     {({user})=>
     <h4 className="font-bold text-xl">
       {user.name} - {user.email}
     </h4>}
   </UserContext.Consumer>
   
   <p>
   This is the Namaste React Live Courese Chapter 07 - Finding the path
    </p>
    <Profile/>
   
   </div>

      )
      //<Profile  name={"Second-Class"}  xyz="abc"/>
   }
}
export default About;