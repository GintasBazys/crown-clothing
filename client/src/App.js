import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignOut";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import Header from "./components/header/HeaderComponent";
import { selectCurrentUser } from "./redux/user/UserSelectors";
import { createStructuredSelector } from "reselect";
import {checkUserSession} from "./redux/user/UserActions";

const App = ({checkUserSession, currentUser}) => {

        useEffect(() => {
            checkUserSession();
        }, [checkUserSession]);

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}
                    />
                </Switch>
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
