import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //Create State
        this.state = {
            count: 0,
            count2:0,
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location"
            }
        };
        console.log("Child-Constructor");
    }
    async componentDidMount() {
        // API Calls
       this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP");
        },1000);
        const data = await fetch("https://api.github.com/users/MdRehan190");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        console.log("Child-componentDidMount");
    }
    componentDidUpdate(prevProps,prevState) {
        if(this.state.count !== prevState.count
        ){
            // code
        }
        if(this.state.count2 !== prevState){

        }
        console.log("Child - componentDidUpdate");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Child - componentDidUnmount");
    }
    render() {
       const  {count} = this.state;
       const {userInfo} = this.state;
       console.log("Child-render");
        return(
            <div>
            <h1>Profile Class Component</h1>
            <img src={userInfo.avatar_url}/>
            <h4>{userInfo.name}</h4>
            <h5> {userInfo.location}</h5>
           
            <button 
               onClick={()=>{
                // WE DO NOT MUTATE STATE DIRECTLY
                // Never do this .state = something
                this.setState ({
                    count: 1,
                    count2: 1,
                });
               }}
               >
               SetCount
               </button>
            </div>
        ) 
    }
}

/**
 * Parent constructor
 * Parent render
 * Child constructor
 * Child render
 * 
 * DOM is updated
 * json is logged in console
 * Child componentDidMount
 * 
 * Parent componentDid Mount
 * 
 * 
 */
/**
 * 
 * Child constructor
 * Child render
 * Child componentDidMount
 * 
 * API call
 * Set State
 * 
 * <UPDATE CYCLES>
 * render 
 * 
 * 
 * 
 */

export default Profile;