import Firebase from 'firebase';
import {BrowserRouter, Route} from 'react-router-dom';
import Onboardingstepper from '../views/Onboardingstepper.js'
  
  //GOOGLE AUTHENTICATION \/ \/ \/ \/ \/ 
 
  const renderAfterSignOn = () => {
  
    <BrowserRouter>
      <Route path="../views/onboardingstepper.js"/>
      {console.log("failed")};
    </BrowserRouter>
  
}

    function authentication(info) {
    var provider = new Firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile'); //asks for users profile
    provider.addScope('https://www.googleapis.com/auth/user.birthday.read'); //asks for user bd
    provider.addScope('https://www.googleapis.com/auth/userinfo.email'); //and email
    Firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({ 
        'login_hint': 'user@dialexa.com'
    });

    Firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // console.log(credential);
      
 
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var currentUser = result.user;
      var usersEmail = currentUser.email;
      var usersPhotoURL = currentUser.photoURL;
      var userEmailVerified = currentUser.emailVerified;  
      var userUniqueID = currentUser.uid;
      var userName = currentUser.displayName;
      // console.log(token);
      // console.log({usersEmail});
      // console.log({usersPhotoURL}); //prints user email to console! lfg
      // console.log({userEmailVerified});
      // console.log({userUniqueID});     
      info = [token, usersEmail, usersPhotoURL, userEmailVerified, userUniqueID];

      
      function writeUserData(name, email, photoURL, emailverified, id) {
        Firebase.database().ref('users/'+id.set({
            name: name,
            email: email,
            photoURL:photoURL,
            id: id,
            emailverified:emailverified 
            
        }))
      }
        writeUserData(userName, usersEmail, usersPhotoURL, userEmailVerified, userUniqueID)
      // ...
                           
 
    }).catch((error) => {
      // // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...     console.log(user)
      
  
      // take you to new page?
      
    });
  
    return info;
  };

  
  const signout = () => {
    Firebase.auth().signOut().then(() => {
      console.log("Signed out!");
  
    }).catch((error) => { 
      console.log("Can't be signed out!");

    })
  }
 
    
    export {authentication, signout, renderAfterSignOn};