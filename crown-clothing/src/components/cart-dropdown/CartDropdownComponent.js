import React from "react";

import CustomButton from "../custom-button/CustomButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import { connect } from "react-redux";
import "./cart-dropdown-styles.scss";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
     )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);