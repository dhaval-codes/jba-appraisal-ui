import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";

//Loader
import PageLoader from "../Components/Loading";

// navigation pages
import LoginPage from "../Pages/LoginPage";

const navMenu = [
    {
        label: 'Login-Page',
        path: '/',
        element: (
            <Suspense
            fallback={
                <PageLoader/>
            }>
                <LoginPage/>
            </Suspense>
        )
    }
]

export default function MyAppRoutes () {
    return(
        <Routes>
            {navMenu.map((ele,i)=>(
                <Route
                    key={`${ele.path}-${i}}`}
                    path={ele.path}
                    element={ele.element}
                />
            ))}
        </Routes>
    )
}