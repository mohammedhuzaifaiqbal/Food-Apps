import React,{lazy,Suspense, useState} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.js";
import  Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Errors from "./components/Errors.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
//import Instamart from "./components/Instamart.js";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loaing
// Dynamic Import
const Instamart = lazy(() =>import("./components/Instamart.js"));
const About = lazy(()=>import("./components/About.js"))
// Upon Demand Loading
const AppLayout = () => {
     const [user,setUser] = useState({
          name:"Akshay Saini",
          email: "support@namastedev.com"
     });
      return (
         <>
         
         <UserContext.Provider
           value={{
               user:user,
               setUser: setUser,
           }}
         >
         <Header/>
         <Outlet />
         <Footer/>
         </UserContext.Provider>
         </>
 );
};
const appRouter =  createBrowserRouter([
      { path:"/",
       element:<AppLayout/>,
       errorElement: <Errors/>,
       children: [
            {path:"/",
            element:<Body  user={{
               name:"Namaste React",
               email:"support@namastedev.com",
          }}/>
           },
            {path:"/about",
             element:(
             <Suspense>
             <About/>,
             </Suspense>),
             children:[          
                  {
                    path:"profile",  //parentPath/{path} => localhost:1455/about/profile
                    element:<Profile/>
                  }
             ]
            
            },
            {path:"/contact",
             element:<Contact/>
            },
            {path:"/restaurant/:resId",
             element:<RestaurantMenu/>
            },
            {
               path:"/instamart",
               element:
               <Suspense fallback={<Shimmer/>}>
               <Instamart/>
               </Suspense>
            }
       ]
      },
]);

//root.render(<AppLayout/>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);


// Applayout
//  (state=user) 
//  -<Body user={user}/>
//    -<RestaurantContainer user=>
//      - RestaurantCard user={user}
//         -<h4>{user}<h4>
// Props Drilling