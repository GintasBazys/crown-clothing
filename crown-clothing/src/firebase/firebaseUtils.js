import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB4MhX6CeXWNTc9YC5sS5oMsZEVUTJUIyM",
        authDomain: "crown-clothing-db-4f1ab.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-4f1ab.firebaseio.com",
    projectId: "crown-clothing-db-4f1ab",
    storageBucket: "crown-clothing-db-4f1ab.appspot.com",
    messagingSenderId: "644033124524",
    appId: "1:644033124524:web:4721689bf2bfdcc4eaa709",
    measurementId: "G-P0RQJNK5L7"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;