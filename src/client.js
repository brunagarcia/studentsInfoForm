import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxmv_9hijAMXYyp0GXdLd9az2DiSjPWpQ",
    authDomain: "studentsdata-12d9a.firebaseapp.com",
    databaseURL: "https://studentsdata-12d9a.firebaseio.com",
    projectId: "studentsdata-12d9a",
    storageBucket: "studentsdata-12d9a.appspot.com",
    messagingSenderId: "582022948661"
};


firebase.initializeApp(config);

export default firebase;