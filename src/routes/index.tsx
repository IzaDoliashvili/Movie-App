// import { Navigate, createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";
// import ExplorePage from "../pages/explore";
// import DetailsPage from "../pages/detail";
// import SearchPage from "../pages/search";
// import  LogIn  from "../pages/auth/logIn";
// import  Register  from "../pages/auth/register";
// import DashboardLayout from "../layouts";
// import EditProfilePage from "../pages/account/profile";
// import ProfilePage from "../pages/account/userProfile";




// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Navigate to="/en" replace />, 
//     },
    
//     {
//         path : "/:lang",
//         element : <DashboardLayout />,
//         children : [
//             {
//                 path : "",
//                 element : <Home/>
//             },
//             {
//                 path : ":explore",
//                 element : <ExplorePage/>
//             },
//             {
//                 path : ":explore/:id",
//                 element : <DetailsPage/>
//             },
//             {
//                 path : "search",
//                 element : <SearchPage/>
//             },
//             {
//                 path : "auth/Log-in",
//                 element : <LogIn/>
//             },
//             {
//                 path : "auth/Register",
//                 element : <Register/>
//             },
//             {
//                 path : "user/profile/edit",
//                 element : <EditProfilePage/>
//             },
//             {
//                 path : "user/profile",
//                 element : <ProfilePage/>
//             },
            
            
//         ]
//     }
// ])

// export default router

import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts";
import Home from "../pages/home";
import { Suspense } from "react";
import { ALL_ROUTES } from "./routes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/en" replace />,
    },
    {
      path: "/:lang",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        ...ALL_ROUTES,
      ],
    },
  ]);
  

export default router;
