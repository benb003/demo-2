import Link from "next/link";
import { useContext } from "react";
import CartContext from "@/context/CartContext";
import Button from "./UI/Button";
import { currencyFormatter } from "@/util/currencyFormatter";
import CartItem from "./CartItem";
import { usePathname } from "next/navigation";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const pathname = usePathname();
  return (
    <div className="modal-container">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      {cartTotal !== 0 ? (
        <p className="cart-total">{currencyFormatter(cartTotal)}</p>
      ) : (
        <h3>Your cart is empty</h3>
      )}
      <p className="modal-actions">
        <Link href={pathname}>
          <Button>Close</Button>
        </Link>
        {cartCtx.items.length > 0 && <Button>Go to Checkout</Button>}
      </p>
    </div>
  );
};
export default Cart;
