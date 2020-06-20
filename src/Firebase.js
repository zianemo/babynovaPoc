import * as firebase from 'firebase';

import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
	apiKey: "AIzaSyCI_gxViTua10T-HwiK2QxZKv-Dtnoh0Nk",
    authDomain: "ticapp-888a2.firebaseapp.com",
    databaseURL: "https://ticapp-888a2.firebaseio.com",
    projectId: "ticapp-888a2",
    storageBucket: "ticapp-888a2.appspot.com"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;