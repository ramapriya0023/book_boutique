import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { book_name, quantity, book_price, book_image } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={book_image} alt={book_name} />
      <div className="item-details">
        <span className="name">{book_name}</span>
        <span className="price">
          {quantity} x ₹{book_price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
