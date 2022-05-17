const firebaseConfig = {
      apiKey: "AIzaSyDQkDdXFzm1x0huHFoTrzAB6j0zuIexOhM",
      authDomain: "kwitter-a5307.firebaseapp.com",
      databaseURL: "https://kwitter-a5307-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5307",
      storageBucket: "kwitter-a5307.appspot.com",
      messagingSenderId: "609684442471",
      appId: "1:609684442471:web:ade9794977b114c1cfb3c2",
      measurementId: "G-ER6PF8GQ6L"
    };
    firebase.initializeApp(config) ;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
