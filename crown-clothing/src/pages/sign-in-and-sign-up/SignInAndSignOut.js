import React from "react";

import "./sign-in-and-sign-out-styles.scss";

import SignIn from "../../components/sign-in/SignInComponent";
import SignUp from "../../components/sign-up/SignUpComponent";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default  SignInAndSignUpPage;