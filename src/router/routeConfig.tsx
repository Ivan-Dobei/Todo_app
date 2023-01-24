import MainPage from "../pages/MainPage/MainPage";
import {IRoute} from "../models/IRoute";
import LoginPage from "../pages/LoginPage/LoginPage";

export enum RouteNames {
    MainPage = 'main',
    LoginPage = 'login',
}

export const RoutePaths: Record<RouteNames, string> = {
    [RouteNames.MainPage]: '/main',
    [RouteNames.LoginPage]: '/login',
}

export const routeConfig: Record<RouteNames, IRoute> = {
    [RouteNames.MainPage]: {
        path: RoutePaths.main,
        element: <MainPage/>,
    },
    [RouteNames.LoginPage]: {
        path: RoutePaths.login,
        element: <LoginPage/>
    },
}