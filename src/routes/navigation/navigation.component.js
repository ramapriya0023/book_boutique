import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import store_logo from "../../resources/store_logo.png";
import "./navigation.styles.js";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.js";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const dispatch = useDispatch;
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img
            src={store_logo}
            className="logo"
            style={{ height: "50px", width: "50px" }}
            alt={"App logo"}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            <Typography variant="h6">SHOP</Typography>
          </NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutUser}>
              <Typography variant="h6">SIGN OUT</Typography>
            </NavLink>
          ) : (
            <NavLink to="/auth">
              <Typography variant="h6">SIGN IN</Typography>
            </NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
