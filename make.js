





// const firebaseConfig = {
//   apiKey: "AIzaSyBv8JhkYnKnUeFqdFQfG4cy6CAje_dqnTU",
//   authDomain: "singup-fbc9e.firebaseapp.com",
//   projectId: "singup-fbc9e",
//   storageBucket: "singup-fbc9e.appspot.com",
//   messagingSenderId: "435448853261",
//   appId: "1:435448853261:web:490a7aac78f2757d043644",
//   measurementId: "G-H80BNNHF3J"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// var datab = firebase.database().ref('data');
// function UserRegister(){
// var email = document.getElementById('login-email').value;
// var password = document.getElementById('login-password').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

// }).catch(function(error){
//   var errorCode = error.code;
//   var errormsg = error.message;
// })

// }

// const auth = firebase.auth();
// function Signin(){
//   var email = document.getElementById('login-email').value;
// var password = document.getElementById('login-password').value;
// const promise = auth.signinWithEmailAndPassword(email,password);
// promise.catch(e=> alert(e.msg));
// window.open("https://www.google.com","_self");
// }
// document.getElementById('form').addEventListener("submit",(e)=>{
//   e.preventDefault();
//   var userinfo = datab.push();
//   userinfo.set({
//     email:getId("login-email"),
//     password:getId("login-password"),

//   });
//   document.getElementById("form").reset();
// });

// function getId(id){
//   return document.getElementById(id).value;
// }





// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBjcE2WxmlobtLw7HdG8dhyww_IIRyXa9k",
//   authDomain: "formlogin-6f886.firebaseapp.com",
//   projectId: "formlogin-6f886",
//   storageBucket: "formlogin-6f886.appspot.com",
//   messagingSenderId: "694829296589",
//   appId: "1:694829296589:web:e13320bb6d1213cbd33284"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);





// const firebaseConfig = {
//   apiKey: "AIzaSyBzAWqpXEmWbAF84amfZQpliBnFUAMcMG0",
//   authDomain: "manb-228d5.firebaseapp.com",
//   projectId: "manb-228d5",
//   storageBucket: "manb-228d5.appspot.com",
//   messagingSenderId: "218889129372",
//   appId: "1:218889129372:web:ee034de4524e89b0ea8c59"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const database = firebase.database()

// function register () {
//   email = document.getElementById('register-email').value
//   password = document.getElementById('register-password').value

// }

// if (validate_email(email) == false || validate_password(password) == false){
//   // alert ('email must be filled ')
  
// }

// auth.createUserWithEmailAndPassword(email, password)
// .then(function(){

//   var user = auth.currentUser


//   var database_ref = database.ref()

//   var user_data = {
//     email : email,
//     full_name : full_name,
//     last_login : Date.now()
//       }

//       database_ref.child('user/' + user.uid).set(user_data)


//   alert('User Created!!')

// })
// .catch(function(error){
//   var error_code = error.code
//   var error_Message = error.Message

//   alert(error_Message)
// })

// function validate_email(email){
//  expression = /^[^@]+@\w+(\.\w+)+\w$/
//  if (expression.test(email) == true){
//   return true
//  }else {
//   return false
//  }
// }

// function validate_password(password){
//   if (password < 6){
//     return false
//   } else {
//     return true
//   }
// }









document.getElementById('reg-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('Login-div').style.display="none";

});

document.getElementById('Log-btn').addEventListener('click', function(){
  document.getElementById('register-div').style.display="none";
  document.getElementById('Login-div').style.display="inline";

});


// document.getElementById('regi-btn').addEventListener('click', function(){

//   const  loginEmail = document.getElementById("login-email").value;
//   const loginPassword = document.getElementById("login-pasword").value;

//   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   document.getElementById('result-box').style.display="inline";
//   document.getElementById('Login-div').style.display="none";
//   document.getElementById('result').innerHTML="welc  dkkd";

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById('result-box').style.display="inline";
//   document.getElementById('Login-div').style.display="none";
//   document.getElementById('result').innerHTML="srry !!";

//   });

// }

