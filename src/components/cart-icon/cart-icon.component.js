import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ShoppingIcon, CartIconContainer } from "./cart-icon.styles";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/material";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <IconButton aria-label="cart">
        <Badge
          badgeContent={cartCount}
          color="primary"
          sx={{
            "& .MuiBadge-badge": {
              right: -3,
              top: 20,
              padding: "0 4px",
            },
          }}
        >
          <ShoppingIcon />
        </Badge>
      </IconButton>
    </CartIconContainer>
  );
};

export default CartIcon;
