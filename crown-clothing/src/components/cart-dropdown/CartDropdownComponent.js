import React from "react";

import CustomButton from "../custom-button/CustomButtonComponent";
import CartItem from "../cart-item/CartItemComponent";
import { connect } from "react-redux";
import "./cart-dropdown-styles.scss";
import { selectCartItems } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";

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
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);