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
user_name = localStorage.getItem("user_name")    
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!" ;
function addRoom() {
room_name = document.getElementById("room_name").value ;
firebase.database.ref("/").child(room_name).update({purpose: "adding roomname"}) ;
localStorage.setItem("room_name", room_name) ;
window.location = "kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("roomname-" + Room_names) ;
    row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>" ;

    });});}
    function redirectToRoomName(name) {
    console.log(name) ;
    localStorage.setItem("room_name", name) ;
    window.location = "kiwtter_page.html"
    }
getData();
