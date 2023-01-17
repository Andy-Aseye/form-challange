import './App.css';
import User from './userProfile';
import LoginButton from './components/loginButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated === true?  <LoginButton /> : null}
      <User />
    </div>
  );
}

export default App;
