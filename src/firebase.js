import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore'

firebase.initializeApp({
	apiKey: "AIzaSyCiwLN21fnJwTPE8s3X6xS3VpXTfI9VRFc",
	authDomain: "vue-app-crm-85f9c.firebaseapp.com",
	projectId: "vue-app-crm-85f9c",
	storageBucket: "vue-app-crm-85f9c.appspot.com",
	messagingSenderId: "1062065401029",
	appId: "1:1062065401029:web:4ddc8841d01bafa1b9d4ac"
});
const auth = firebase.auth()
const db = firebase.firestore()
const database = firebase.database()
export { auth, db, database };

