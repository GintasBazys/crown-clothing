import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GzNOdGLbaT55J6rGiRySEjJFMJIheUg5YM8Bz14h86fRKYtI8MPv6IODly37A8fj80U2imSX109oB65Qjr9ShJB00LfOAGHNv";

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful");
        }).catch(error => {
            console.log("Payment error ", JSON.parse(error));
            alert("There was an issue with payment");
        })
    }

    return (
        <StripeCheckout
            label="Pay now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;