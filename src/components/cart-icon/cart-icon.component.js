import { ShoppingIcon, CartIconContainer } from "./cart-icon.styles";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

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
