import './App.css';
import User from './userProfile';
import LoginButton from './components/loginButton';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <User />
    </div>
  );
}

export default App;
