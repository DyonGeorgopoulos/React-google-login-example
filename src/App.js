import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const responseGoogle = (response) => {
  
  //This callback gets called on a successfull login
  console.log(response);
  console.log("Logged In!");
  
}
const logout = (response) => {
  console.log(response);
  console.log("logged out");
  
}

function App() {
  return (
    <div className="App">
    
      <GoogleLogin
      clientId="1051194441048-4vdhlle1jsqg6jcfes3jgof8uo1sa2rn.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      isSignedIn={true}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    <GoogleLogout
      clientId="1051194441048-4vdhlle1jsqg6jcfes3jgof8uo1sa2rn.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
    {document.getElementById('googleButton')}
    </div>
  );
}

export default App;
