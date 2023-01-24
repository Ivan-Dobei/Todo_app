import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../router/routeConfig";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            )}
        </Routes>
    );
};

export default AppRouter;