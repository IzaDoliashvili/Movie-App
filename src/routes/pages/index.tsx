import { ROUTE_PATHS } from "../index.enum";

import { lazy, Suspense } from "react";
import {  RouteObject } from "react-router";

const Home = lazy(
  () => import("../../pages/home"),
);

const SearchPage = lazy(
    () => import("../../pages/search"),
  );
  
const DetailsPage = lazy(
    () => import("../../pages/detail"),
);
const ExplorePage = lazy(
    () => import("../../pages/explore"),
  );
  

  export const PAGES_ROUTES : RouteObject[] = [
    {
      path: ROUTE_PATHS.EXPLORE_PAGE,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ExplorePage />
        </Suspense>
      ),
    },
    {
      path: `${ROUTE_PATHS.DETAILS_PAGE}/:id`,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DetailsPage />
        </Suspense>
      ),
    },
    {
      path: ROUTE_PATHS.SEARCH_PAGE,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchPage />
        </Suspense>
      ),
    },
    // <Route
    //   path={ROUTE_PATHS.HOME_PAGE}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Home />
    //     </Suspense>
    //   }
    // />,
    // <Route
    //   path={ROUTE_PATHS.SEARCH_PAGE}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <SearchPage />
    //     </Suspense>
    //   }
    // />,
    // <Route
    //   path={ROUTE_PATHS.DETAILS_PAGE + "/:id"}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <DetailsPage />
    //     </Suspense>
    //   }
    // />,
    // <Route
    //   path={ROUTE_PATHS.EXPLORE_PAGE}
    //   element={
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <ExplorePage />
    //     </Suspense>
    //   }
    // />,
  ];