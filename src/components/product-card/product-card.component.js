import { useContext, useState } from "react";

import { CartContext } from "../../context/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  ImageContainer,
  ProductActions,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsAddedToCart(true);
  };

  return (
    <ProductCardContainer>
      <ImageContainer component="img" alt={`${name}`} image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Price: ₹{price}
        </Typography>
      </CardContent>
      <ProductActions>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          {isAddedToCart ? "Added to cart" : "Add to cart"}
        </Button>
      </ProductActions>
    </ProductCardContainer>
  );
};

export default ProductCard;
