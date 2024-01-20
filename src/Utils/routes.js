import React, {Suspense} from "react";
import { Route, Routes } from "react-router-dom";

//Loader
import PageLoader from "../Components/Loading";

//TestPage
import TestPage from "../Pages/TestPage";

// navigation pages
import LoginPage from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import A2FormsJunior from "../Pages/A2 form page for juniors";
import AdminPage from "../Pages/Admin Page";

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
        ),
        roles: ["staff","HOD","Admin","Co-ordinator"]
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
        ),
        roles: ["staff","HOD","Admin"]
    },
    {
        label: 'A2 form juniors',
        path: '/juniorA2',
        element: (
            <Suspense
            fallback={
                <PageLoader/>
            }>
                <A2FormsJunior/>
            </Suspense>
        ),
        roles: ["staff","HOD","Admin"]
    },
    {
        label: 'A2 form juniors',
        path: '/admin',
        element: (
            <Suspense
            fallback={
                <PageLoader/>
            }>
                <AdminPage/>
            </Suspense>
        ),
        roles: ["staff","HOD","Admin"]
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