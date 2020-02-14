// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADehYlf1ETyOSZR3XSsxs3_YEiQcXYXvc",
    authDomain: "prince-s-portfolio.firebaseapp.com",
    databaseURL: "https://prince-s-portfolio.firebaseio.com",
    projectId: "prince-s-portfolio",
    storageBucket: "prince-s-portfolio.appspot.com",
    messagingSenderId: "1061271902022",
    appId: "1:1061271902022:web:53b72f259e29f706507747",
    measurementId: "G-RPQM0XYLTJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      surname:surname,
      message:message,
      country:country
    });
  }