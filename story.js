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

  function save(){
    msg = document.getElementById("textbox").value;
    name = document.getElementById("title").value;
    firebase.database().ref("/").child(name).update({
          name:title,
          message:msg,
    });
    document.getElementById("textbox").value = "";
    document.getElementById("title").value = "";
    window.location = "final.html";
}

  
  function home()
{
    window.location = "index.html";
}
function done()
{
    window.location = "final.html"
}
