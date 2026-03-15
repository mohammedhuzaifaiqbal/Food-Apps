import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnLine from "../utils/useOnline";
import UserContext from "../utils/UserContext";

//import { useState } from "react";
// const loggedInUser = () => {
//   // API call o check authentication
//    return false;
// };

// SPA - Single Page Application???
// Client Side Routings & Server side Routnings
export const Title = () =>(
    <a href="/">
   <img className="h-[100px] w-[120px] m-2 p-2"   alt="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"/ >
   </a>
    );

    const Header = () => {
        //const [title,setTitle] = useState("Food Villa");
        //console.log("render()");
        const [isLoggedIn,setIsLoggedIn] = useState(false);
         const isOnLine = useOnLine();

         const {user} = useContext(UserContext);

      //   useEffect(()=>{
      //    console.log("useEffect");
      //   },[]);
      // useEffect(()=>{
      //    console.log("useEffect");
      //   });
      //   console.log("render");


        return ( 
                 
                 <div className="flex bg-pink-300 justify-between shadow-lg sm:bg-cyan-100 md:bg-green-300">  
                 <Title/>
                 <div className="nav-items">
                  <ul className="flex py-9 px-40">
                   <Link to="/">
                   <li className="px-10 ">Home</li>
                   </Link> 
                    <Link to="/about">
                      <li className="px-10">About</li>
                    </Link>  
                    <Link to="/contact">
                    <li className="px-10">Contact</li>
                    </Link>
                    <li className="px-10">Cart</li>
                    <Link to="/instamart">
                    <li className="px-10">Instamart</li>
                    </Link>
                  </ul>
                 </div>
                 <span className="p-10 font-bold text-red-700">{user.name}</span>
                 {
                  //JS Expression & Statement
                  //Only Expression
                  
                  isLoggedIn ? 
                  (<button  onClick={()=>{setIsLoggedIn(false)}}>Logout</button>):
                  (<button onClick={()=>{setIsLoggedIn(true)}} >Login</button>)
                 
                }
                 </div>     
        );
     };
     
 
export default Header;  

