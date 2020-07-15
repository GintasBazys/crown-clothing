import React from "react";
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

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        //const { setCurrentUser } = this.props;

        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth);
        //
        //         userRef.onSnapshot(snapShot => {
        //             setCurrentUser({
        //                 id: snapShot.id,
        //                 ...snapShot.data()
        //             });
        //         });
        //     }
        //
        //     setCurrentUser(userAuth);
        // });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
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
                        render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);
