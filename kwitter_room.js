
var firebaseConfig = {
      apiKey: "AIzaSyD0qc5rlIAPsfUm9-ge45wAez9bVUxvDs4",
      authDomain: "kwii-c06e8.firebaseapp.com",
      databaseURL: "https://kwii-c06e8-default-rtdb.firebaseio.com",
      projectId: "kwii-c06e8",
      storageBucket: "kwii-c06e8.appspot.com",
      messagingSenderId: "712159753817",
      appId: "1:712159753817:web:b197897901f723349ce348",
      measurementId: "G-X0SE03XYF1"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function addRoom(){

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}