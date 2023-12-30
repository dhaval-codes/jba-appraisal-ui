import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";

//Loader
import PageLoader from "../Components/Loading";

//TestPage
import TestPage from "../Pages/TestPage";

// navigation pages
import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";

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
    },
    {
        label: 'Landing Page',
        path: '/Staff',
        element: (
            <Suspense
            fallback={
                <PageLoader/>
            }>
                <LandingPage/>
            </Suspense>
        )
    },
    {
        label: 'Test Page',
        path: '/TestPage',
        element: (
            <Suspense
            fallback={
                <PageLoader/>
            }>
                <TestPage/>
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