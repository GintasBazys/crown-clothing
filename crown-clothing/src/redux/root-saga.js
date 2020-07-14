import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/ShopSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart)
    ])
}