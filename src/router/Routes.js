import Posts from "../components/pages/Posts";
import React from "react";
import About from "../components/pages/About";
import PostIdPage from "../components/pages/PostIdPage";
import Login from "../components/pages/Login";

export const privateRoutes=[
    {path : "about", element : <About/>},
    {path : "/posts", element : <Posts/>},
    {path : "*", element : <Posts/>},
    {path : "/posts/:id", element : <PostIdPage/>},
]
export const publicRoutes=[
    {path : "*", element : <Login/>},
]