import firebase from 'firebase'

import Config from '../config'

class FirebaseClass {
    instance;
    database;

    constructor() {
        this.instance = firebase.initializeApp(Config.firebase);
        this.database = firebase.database()
    }
}

var Firebase = new FirebaseClass();

export default Firebase;