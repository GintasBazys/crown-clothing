import { takeEvery, call, put } from "redux-saga/effects";

import ShopActionTypes from "./ShopTypes";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebaseUtils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./ShopActions";

export function* fetchCollectionsAsync() {
   yield console.log("test");
    try{
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch (e) {
        yield put(fetchCollectionsFailure(e.message));
    }
    
    
}

export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}