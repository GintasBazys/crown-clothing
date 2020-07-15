import { all, call } from "redux-saga/effects";
import {shopSagas} from "./shop/ShopSagas";
import {userSagas} from "./user/UserSagas";
import {cartSagas} from "./cart/CartSagas";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ])
}