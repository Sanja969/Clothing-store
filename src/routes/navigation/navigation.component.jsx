import { Outlet, Link } from 'react-router-dom';
import brand from '../../assets/logo.png';
import './navigation.styles.scss';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img className="logo" src={brand} alt="bike" width={50} />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
