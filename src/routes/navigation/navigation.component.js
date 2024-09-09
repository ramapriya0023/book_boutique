import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import store_logo from "../../resources/store_logo.png";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
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

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img
            src={store_logo}
            className="logo"
            style={{ height: "50px", width: "50px" }}
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
