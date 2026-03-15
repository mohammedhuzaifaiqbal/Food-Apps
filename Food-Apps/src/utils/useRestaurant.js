import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    swiggy_menu_api_URL
} from "../config"

const useRestaurant = (resId) => {
  
    
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    return restaurant;
  // Get data from API

  // return restaurant Data
}
export default useRestaurant;