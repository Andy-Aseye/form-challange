import Newform from './components/Newform';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logoutButton';
import './welcome.css';

function User() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading</div>
  }

  return (
    isAuthenticated && (
    <div className="user">
      <h2 className="welcome-m">Welcome <span className="user-n">{user.name}</span>, to our KYC form. Please do well to fill the form with the correct details. You can download the CSV File with the button below.</h2>
      <LogoutButton />
      <Newform />
    </div>)
  );
}

export default User;
