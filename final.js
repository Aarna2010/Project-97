const firebaseConfig = {
    apiKey: "AIzaSyAwPJRenfeo-TxZkmdh-gp9mnfbe_Q0PgY",
    authDomain: "story-33b18.firebaseapp.com",
    databaseURL: "https://story-33b18-default-rtdb.firebaseio.com",
    projectId: "story-33b18",
    storageBucket: "story-33b18.appspot.com",
    messagingSenderId: "721982666716",
    appId: "1:721982666716:web:b8b132502e01f324b0c119"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() 
  {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    title = childKey;

});});}
getData();