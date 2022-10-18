import Toggle from 'react-toggle';
import "react-toggle/style.css";
import SearchMode from './SearchMode';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className="navbar-list">
          <li>
            <h4>
            <span className="logo-auctio">Auctio</span>Nation<span className="logo-version"> 2.0</span>
            </h4>
          </li>
          <li>About</li>
          <li>Link</li>
        </li>
        <li className="navbar-mode">
          <SearchMode />
        </li>
        <li className="navbar-login">
          <li>You are not logged in.</li>
          <li>
            <button className="login-button">Login</button>
          </li>
          <li className='or'>or</li>
          <li>
            <button className='login-button'>Register</button>
          </li>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;