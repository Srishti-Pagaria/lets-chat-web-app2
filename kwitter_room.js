
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDXmhQ6wvFee7ioP0kk2LBigiZhpVa95ac",
      authDomain: "kwitter-website-61a5a.firebaseapp.com",
      projectId: "kwitter-website-61a5a",
      storageBucket: "kwitter-website-61a5a.appspot.com",
      messagingSenderId: "65244169055",
      appId: "1:65244169055:web:e5407f650db1599a93acea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
