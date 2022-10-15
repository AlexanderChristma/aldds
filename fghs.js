

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjcE2WxmlobtLw7HdG8dhyww_IIRyXa9k",
  authDomain: "formlogin-6f886.firebaseapp.com",
  projectId: "formlogin-6f886",
  storageBucket: "formlogin-6f886.appspot.com",
  messagingSenderId: "694829296589",
  appId: "1:694829296589:web:e13320bb6d1213cbd33284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('Login-div').style.display="none";

});

document.getElementById('Log-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="none";
  document.getElementById('Login-div').style.display="inline";

});

document.getElementById('login-btn').addEventListener('click', function(){

  const  loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-pasword").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  document.getElementById('result-box').style.display="inline";
  document.getElementById('Login-div').style.display="none";
  document.getElementById('result-box').innerHTML="welc banck<br>"+loginEmail+" was Lokkk dkkd";



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
  document.getElementById('Login-div').style.display="none";
  document.getElementById('result-box').innerHTML="srry !!";

  });

  

}




























  // const firebaseConfig = {
  //   apiKey: "AIzaSyDUx8qUOD4nXSVQB6dHxXE7FPi4C1bxgHM",
  //   authDomain: "mate-d8bb0.firebaseapp.com",
  //   projectId: "mate-d8bb0",
  //   storageBucket: "mate-d8bb0.appspot.com",
  //   messagingSenderId: "893057076014",
  //   appId: "1:893057076014:web:4ed18445e7e2705b6808bf"
  // };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: "AIzaSyChj_h9KWOKWC383ytFYF4aMBMzPqGgVzg",
//     authDomain: "form-5f994.firebaseapp.com",
//     projectId: "form-5f994",
//     storageBucket: "form-5f994.appspot.com",
//     messagingSenderId: "748636189632",
//     appId: "1:748636189632:web:647c518d934b5137238e25",
//     measurementId: "G-N6LE0KCP27"
//   };

//   initialize firebase

// firebase.initializeApp(firebaseConfig);

// var auth = firebase.auth();

// signup function

// function signUp(){
//     var emaill = document.getElementById("emaq");
//     var passe = document.getElementById("nawq");

//     var promise = auth.creatUserWithEmailAndPassword(emaill.value, passe.value);

//     promise.catch(e=>alert(e.message));
//     alert("sfdeewwe");
//     console.log('nzjknjk');

// }





// const firebaseConfig = {
//     apiKey: "AIzaSyDmYVCFmK-CPQjJY9xA6vE_7tA3BGNE5x4",
//     authDomain: "comfort-realestate-92ba3.firebaseapp.com",
//     databaseURL: "https://comfort-realestate-92ba3-default-rtdb.firebaseio.com",
//     projectId: "comfort-realestate-92ba3",
//     storageBucket: "comfort-realestate-92ba3.appspot.com",
//     messagingSenderId: "741574032474",
//     appId: "1:741574032474:web:69a0369765b9c2f5c8ec63",
//   };
// firebase.initializeApp(firebaseConfig);

// const contactFormDB = firebase.database().ref('comfortrealestate');

// document.getElementById("formn").addEventListener("submit",Fdormn);

// function Fdormn(e){
//     e.preventDefault();
//     var naww = getelememtval("nawq");
//     var emaild = getelememtval("emaq");

//     saveMessages(naww, emaild);

// }

// const saveMessages = (naww, emaild) => {
//     var hed = contactFormDB.push();

//     hed.set({
//         naww : naww,
//         emaild : emaild,
//     });
// };


// const getelememtval = (id) => {
//     return document.getElementById(id).value;

// }


