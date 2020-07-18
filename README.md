This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to set up a google developer Client ID
1. go to https://console.developers.google.com
2. log in
3. Press Enable API's and Services
4. Enable the Google Analytics API, google+ Api, google+ domains, and google+ Hangouts Api
5. press the hamburger menu in the top left and go to Api's and services -> credentials
6. Press create credentials at the top of the screen
7. Create a new OAUTH Client ID
8. Choose Web Application
9. Go down to Authorized Javascript origins and set your url's. For local deployment, set ```http://localhost``` & ```http://localhost:<portnum>```

## How to use the client ID in your react project
```npm install react-google-login```
```import { GoogleLogin } from 'react-google-login';```
# Put this above your render function in App.js
const responseGoogle = (response) => {
  console.log(response);
}
# Put this in your render function
 <GoogleLogin
      clientId="1051194441048-4vdhlle1jsqg6jcfes3jgof8uo1sa2rn.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      isSignedIn={true}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    {document.getElementById('googleButton')}
# Run NPM Start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
