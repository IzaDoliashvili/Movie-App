import { ROUTE_PATHS } from "../index.enum";
import { lazy, Suspense } from "react";
import {  RouteObject } from "react-router";

const Register = lazy(
    () => import("../../pages/auth/register/index"),
  );
  
const LogIn = lazy(
    () => import("../../pages/auth/logIn/index")
);

  

  export const AUTH_ROUTES: RouteObject[]  = [

    {
      path: ROUTE_PATHS.AUTH_LOG_IN,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LogIn />
        </Suspense>
      ),
    },
    {
      path: ROUTE_PATHS.AUTH_REGISTER,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },
    // <Route
    //   path={ROUTE_PATHS.AUTH_REGISTER}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Register />
    //     </Suspense>
    //   }
    // />,
    // <Route
    //   path={ROUTE_PATHS.AUTH_LOG_IN}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <LogIn />
    //     </Suspense>
    //   }
    // />,
    
  ];