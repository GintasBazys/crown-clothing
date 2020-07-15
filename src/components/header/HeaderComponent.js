import React from "react";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./header-styles.scss";
import CartIcon from "../cart-icon/CartIconComponent";
import CartDropdown from "../cart-dropdown/CartDropdownComponent";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./HeaderStyles";
import { signOutStart } from "../../redux/user/UserActions";

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ? <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv> : <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);