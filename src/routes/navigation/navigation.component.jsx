/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import brand from '../../assets/logo.png';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { CardContext } from '../../context/card.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(CardContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={brand} alt="bike" width={50} />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )
          }
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
