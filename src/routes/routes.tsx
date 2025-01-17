import { AUTH_ROUTES } from "./auth";
import { PAGES_ROUTES } from "./pages";
import { USER_ROUTES } from "./user";


export const ALL_ROUTES = [...USER_ROUTES, ...AUTH_ROUTES, ...PAGES_ROUTES];