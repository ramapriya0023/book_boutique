import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { book_name, book_price, book_image, book_value } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={book_image} alt={`${book_name}`} />
      <div className="footer">
        <span className="name">{book_name}</span>
        <span className="price">₹{book_price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
