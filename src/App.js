import './App.css';
import User from './userProfile';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton'

function App() {
  return (
    <div className="App">
      <LoginButton /> 
      <LogoutButton />
      <User />
    </div>
  );
}

export default App;
