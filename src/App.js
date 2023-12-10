import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/home-page";
import LoginScreen from "./screens/login-page";
import ContuctScreen from "./screens/contuct-page";
import LandingScreen from "./screens/landing-page";
import TodoScreen from "./screens/todo-app-page";
import UserScreen from "./screens/user-login";
import AccountCrationScreen from "./screens/account-creation";
import ConductPageScreen from "./screens/conduct-page";
import UserProfileScreen from "./screens/user-profile";
import GetAllUsers from "./screens/get-all-users";
import PostUserAccountScreen from "./screens/post-user-account";
import ShowProductsScreen from "./screens/show-products";
import NodeGetApiScreen from "./screens/node-get-api";
import CrudOperationPage from "./screens/crud-operation";

function app() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contuct" element={<ContuctScreen></ContuctScreen>}></Route>
         <Route path="" element={<LandingScreen></LandingScreen>}></Route>
         <Route path="todo" element={<TodoScreen></TodoScreen>}></Route>
         <Route path="User" element={<UserScreen></UserScreen>}></Route>
         <Route path="account" element={<AccountCrationScreen></AccountCrationScreen>}></Route>
         <Route path="profile" element={<ConductPageScreen></ConductPageScreen>}></Route>
         <Route path="userprofile" element={<UserProfileScreen></UserProfileScreen>}></Route>
         <Route path="getall" element={<GetAllUsers></GetAllUsers>}></Route>
         <Route path="postuser" element={<PostUserAccountScreen></PostUserAccountScreen>}></Route>
         <Route path="products" element={<ShowProductsScreen></ShowProductsScreen>}></Route>
         <Route path="nodeapi" element={<NodeGetApiScreen></NodeGetApiScreen>}></Route>
         <Route path="crud" element={<CrudOperationPage></CrudOperationPage>}></Route>

      </Routes>
      </BrowserRouter>

  )
}

export default app;