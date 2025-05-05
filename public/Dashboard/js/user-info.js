if (!firebase.apps.length) {
	try {
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: "AIzaSyCCtTuPIOjXVPdn4av8mNLWQGwqLz4uiGQ",
			authDomain: "budgetfinalbank.firebaseapp.com",
			projectId: "budgetfinalbank",
			storageBucket: "budget-banking-proj.appspot.com",
			messagingSenderId: "221922223081",
			appId: "1:213828126009:web:86ff32c2d1ebae4950d4e8"
		};
  
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		console.log("Firebase initialized successfully.");
	} catch (error) {
		console.error("Error initializing Firebase:", error);
	}
}

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log("User is signed in:", user);

		// Retrieve the user's photo URL
		const userPhotoURL = user.photoURL;
		console.log("User photo URL:", userPhotoURL);
		const userName = user.displayName
		console.log(userName);
		
		// Select the profile image element
		const profileImage = document.getElementById("user-profile-image");
		const profileName = document.getElementById("user-name")
		// Update the src attribute of the profile image
		if (profileImage && userPhotoURL) {
			profileImage.src = userPhotoURL;
			console.log("Profile image updated successfully.");
		} else {
			console.error("Profile image element not found or photo URL is null.");
		}
		if (profileName && userName) {
			profileName.textContent = userName;
		}
	} else {
		console.log("No user is signed in.");
	}
});
