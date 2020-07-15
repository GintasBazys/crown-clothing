import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/ShopSagas";
import {userSagas} from "./user/UserSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSagas)
    ])
}