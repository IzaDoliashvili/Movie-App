import { ROUTE_PATHS } from "../index.enum";
import { lazy, Suspense } from "react";
import { Route, RouteObject } from "react-router";

const EditProfilePage = lazy(
    () => import("../../pages/account/profile"),
  );
  
const ProfilePage = lazy(
    () => import("../../pages/account/userProfile")
);

  

  export const USER_ROUTES : RouteObject[] = [
    {
        path: ROUTE_PATHS.USERS_PROFILE,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATHS.USERS_PROFILE_EDIT,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditProfilePage />
          </Suspense>
        ),
      },
    // <Route
    //   path={ROUTE_PATHS.AUTH_REGISTER}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <EditProfilePage />
    //     </Suspense>
    //   }
    // />,
    // <Route
    //   path={ROUTE_PATHS.AUTH_LOG_IN}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <ProfilePage />
    //     </Suspense>
    //   }
    // />,
    
  ];