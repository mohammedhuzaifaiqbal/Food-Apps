import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({
   name,
   cuisines,
   cloudinaryImageId,
   areaName,
   avgRating}) => {
    const {user} = useContext(UserContext);
    return (
       <>
       <div className="w-52 p-2 m-2 shadow-md bg-cyan-200">
           <img src={IMG_CDN_URL + cloudinaryImageId}/>
          
          <h2 className="font-bold">{name}</h2>
          <h4 className="text-sm">{cuisines.join(",")}</h4>
          <h4>{areaName} </h4>
          <span>
          <h4><i className="fa-solid fa-star">{avgRating}</i></h4>
          <h4>{/*user.name*/}</h4>
          <h5 className="font-bold">{user.name}-{user.email}</h5>
          
         </span>

       </div>
       </>
    );
 }
 export default RestaurantCard;