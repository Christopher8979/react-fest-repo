import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureFirebase from './firebase';
// import firebase from 'firebase';
// import sillyname from 'sillyname';

configureFirebase();
// firebase.auth().signInAnonymously();
// let photoURL = "";
// const displayName = sillyname();
// avatar(displayName).toBuffer( (err,buffer) => {
//     photoURL = buffer.toString('base64');
// });
// firebase.auth().currentUser.updateProfile({ displayName })
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
