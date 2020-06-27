import { combineReducers } from "redux";

import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducers";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})