var firebaseConfig = {
    apiKey: "AIzaSyBkLHRgT3cLzH3_XRgqoBA8So3HleNmlic",
    authDomain: "todoappfmp-2965b.firebaseapp.com",
    databaseURL: "https://todoappfmp-2965b-default-rtdb.firebaseio.com",
    projectId: "todoappfmp-2965b",
    storageBucket: "todoappfmp-2965b.appspot.com",
    messagingSenderId: "1073148261540",
    appId: "1:1073148261540:web:58d8a868a96e282b6e2231"
  };

var app = firebase.initializeApp(firebaseConfig);

  
  
  function getDetails(){
         var email = document.getElementById("email");
         var password = document.getElementById("password");
  
         var detailsObj = {
          email:email.value,
          password:password.value
         }
         var key = Math.random() * 325136136;
  
         firebase
           .database()
           .ref("hasan/users/" + Math.round(key))
           .set(detailsObj);
           
           
  } 
    function getDataFromFirebase() {
      firebase
        .database()
        .ref("hasan/users")
        .on("child_added", function (data) {
          console.log(data.val());
        });
    }
    getDataFromFirebase();
  
    var loginButton = document.getElementById("loginButton")
    loginButton.addEventListener("click", function() {
    var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if (!email || !password) {
          alert("Please fill in all the fields");
      } else {
      window.location.href = "todo.html";
      }
  });
  