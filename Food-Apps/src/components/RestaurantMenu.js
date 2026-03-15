import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY
} from "../config.js";
import useRestaurant from "../utils/useRestaurant.js";

const RestaurantMenu = () => {
    const {resId} = useParams();
    //how to read dynamically URL
   const restaurant = useRestaurant(resId);
    
    return(!restaurant)?(
        <Shimmer/>):(

        <div>
        <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
         <h2>{restaurant?.cards[0]?.card?.card?.info?.id}</h2>
        
         <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
         <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
         <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
         <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwo}</h3>
         <h3>{restaurant?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h3>
         <img alt="img" src={IMG_CDN_URL +restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
         }></img>
        </div>
        <div>
        

        </div>
        </div>
    )
}
export default RestaurantMenu;

// //<ul>
// {(restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map((item,index) =>(
//     <li key= {index}>{item}</li>
// ))}
// </ul>