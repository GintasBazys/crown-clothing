import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/HeaderComponent";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignOut";

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
