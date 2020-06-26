import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/HeaderComponent";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignOut";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/UserActions";

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                    });
                });
            }
            this.props.setCurrentUser(userAuth)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
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
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
