// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User logged in:', user);
      // Show popup box
      showPopup();
      // Redirect or update UI as needed
      window.location.href="";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorMessage);
      // Display error message to the user
    });
} 
);

// Function to show the popup box
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// Function to close the popup box
function closePopup() {
  document.getElementById("popup").style.display = "none";
}document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Your login logic using Firebase or other methods...

  // If login successful, show the popup
  if (loginSuccessful) {
    document.getElementById('popup').style.display = 'block';
  } else {
    // Handle login failure (show error message)
  }
});function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Your login logic using Firebase or other methods goes here...

  if (loginSuccessful) {
    // Show the popup
    document.getElementById('popup').style.display = 'block';
  } else {
    // Handle login failure (show error message)
  }
});

