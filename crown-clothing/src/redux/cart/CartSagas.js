import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/UserTypes";
import { clearCart } from "./CartActions";

export function* clearCartAndSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartAndSignOut);
}

export function* cartSagas() {
    yield(all([
        call(onSignOutSuccess)
    ]))
}