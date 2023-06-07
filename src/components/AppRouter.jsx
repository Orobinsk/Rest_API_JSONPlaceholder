import React, {useContext} from 'react';
import { Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/Routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={Math.random()}
                        />
                    )}
                </Routes>
            :
                <Routes >
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={Math.random()}
                        />
                    )}
                </Routes>

    );
};

export default AppRouter;