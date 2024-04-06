import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import {GoogleOAuthProvider} from '@react-oauth/google';

function App() {
  
  const clientId= '874652321573-89bmi0lp4p6tu83r0qeum56jko29gilb.apps.googleusercontent.com'
  
  
  return (
    <GoogleOAuthProvider   clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
