


import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger";

import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '92795895282-0hc8vqv42q3tllq4ggb477e9s3gj2c09.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
    <Messenger/>
    </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
