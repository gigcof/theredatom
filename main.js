 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDyaF2jjdUCNtF3IpRDEEtsCxirXuo16Iw",
    authDomain: "redatom-c6b35.firebaseapp.com",
    databaseURL: "https://redatom-c6b35.firebaseio.com",
    projectId: "redatom-c6b35",
    storageBucket: "redatom-c6b35.appspot.com",
    messagingSenderId: "709727569226",
    appId: "1:709727569226:web:b04aee5049cd3ba70aedb3",
    measurementId: "G-S7XQ5XJ04L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 // Reference msgs collection
 var messageRef = firebase.database().ref();

// Listen for a form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	// get values
	var name = getInputVal('name');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	saveMessage(name, email, phone, message);

	document.querySelector('.alert').style.display = 'block';

	// Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	// Clear form
	document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save the msg to firebase
function saveMessage(name, email, phone, message) {
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		phone: phone,
		message: message
	});
}







