import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'
import logo from './logo.svg';
import './App.css';


const responseGoogle = (response) => {
  //This callback gets called on a successfull login
  console.log(response);
  console.log("RESPONSE");
}
function App() {
  return (
    <div className="App">
    
      <GoogleLogin
      clientId="1051194441048-4vdhlle1jsqg6jcfes3jgof8uo1sa2rn.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      isSignedIn={true}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    {document.getElementById('googleButton')}
  );
    </div>
  );
}

export default App;
