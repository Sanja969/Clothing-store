/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import brand from '../../assets/logo.png';
import {
  NavigationContainer, LogoContainer, NavLinksContainer, NavLink,
} from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropdown from '../../components/card-dropdown/card-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCardOpen } from '../../store/card/card.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCardOpen = useSelector(selectIsCardOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img className="logo" src={brand} alt="bike" width={50} />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="auth">
                SIGN IN
              </NavLink>
            )
          }
          <CardIcon />
        </NavLinksContainer>
        {isCardOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
