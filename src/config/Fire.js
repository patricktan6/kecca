import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBtTEWyttLk2Fo5NzcubJQooDOf7sRkjQ",
    authDomain: "kecca-c61e3.firebaseapp.com",
    databaseURL: "https://kecca-c61e3.firebaseio.com",
    projectId: "kecca-c61e3",
    storageBucket: "kecca-c61e3.appspot.com",
    messagingSenderId: "266050710913",
    appId: "1:266050710913:web:0a862ec3e66137b7d9cc80",
    measurementId: "G-6M3TMPCVC9"
};

const fire = firebase.initializeApp(config);

export default fire;