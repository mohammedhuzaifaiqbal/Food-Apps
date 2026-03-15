import { useState,useEffect,useContext } from "react";
//import { RestrauntList } from "../config.js";
import RestaurantCard from "./RestaurantCard.js";
import React from "react";
import Shimmer from "./Shimmer.js";
import { NotMatchFound } from "../config.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnLine from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";

 const Body = () => {

    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [SearchText,setSearchText] = useState('');
    const {user,setUser} = useContext(UserContext);
    useEffect(()=>{
      getRestaurants();
    },[]);
    async function getRestaurants() {
     const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
    }

    const isOnLine = useOnLine();
    
    if(!isOnLine){
      return <h1>Offline, please check your internet connection!!!</h1>
    }
   // not render component (Early return)
   if(!allRestaurants) return null;
   

    return (allRestaurants.length ===0)?<Shimmer/>:(
      <>
      <div className="p-5 my-2 bg-cyan-100">
        <input
         type="text" 
         className="focus:bg-purple-200 p-2 m-2 rounded-md"
         placeholder="Search"
         value={SearchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        <button className="p-1 m-2 bg-green-600 text-white rounded-md hover:bg-purple-700"
         onClick={()=>{
          
         const data = filterData(SearchText,allRestaurants);
         setFilteredRestaurants(data);

          
        }}>Search
        </button>
        <input value={user.name} onChange={
          e=> setUser({
            name:e.target.value,
           
          })
        }></input>
        <input value={user.email} onChange={
          e=> setUser({
             email:e.target.value
          })
        }></input>
      </div>
      <div className="flex flex-wrap bg-purple-800">    
      {
        allRestaurants.length===0 ? (<Shimmer/>):filteredRestaurants.length===0 ? (<NotMatchFound/>):
       (filteredRestaurants.map((restaurant)=>{
         return (
          <Link to={"/restaurant/"+restaurant?.info?.id}
          key={restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}  user={user}/></Link>
         );
       }))
      }
      </div>
      </>
    );
 };
 
 export default Body;