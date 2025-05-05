// Update imports to use CDN URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
if (!firebase.apps.length) {
  try {
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCCtTuPIOjXVPdn4av8mNLWQGwqLz4uiGQ",
        authDomain: "budgetfinalbank.firebaseapp.com",
        projectId: "budgetfinalbank",
        storageBucket: "budgetfinalbank.firebasestorage.app",
        messagingSenderId: "213828126009",
        appId: "1:213828126009:web:86ff32c2d1ebae4950d4e8"
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log("Firebase initialized successfully.");
  } catch (error) {
      console.error("Error initializing Firebase:", error);
  }
}
// Get the storage instance here if you plan to use it in this file
// Initialize Firebase Authentication
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
	callbacks: {
	  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
		if (authResult.additionalUserInfo.isNewUser) {
            console.log("New user signed in.");
        } else {
            console.log("Existing user signed in.");
        }
		// Return type determines whether we continue the redirect automatically
		// or whether we leave that to developer to handle.
		return true;
	  },
	  uiShown: function() {	
		// The widget is rendered.
		// Hide the loader.
		document.getElementById('loader').style.display = 'none';
	  }
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: '/expense.html',
	  // Leave the lines as is for the providers you want to offer your users.
	  signInOptions: [
	  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	// Terms of service url.
	tosUrl: '<your-tos-url>',
	// Privacy policy url.
	privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
