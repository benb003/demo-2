"use client";
import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "@/context/CartContext";


const NavBar = () => {
  const cartCtx = useContext(CartContext);
  
  const totalItems = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div className="title">
        <img src="logo.png" alt="logo" />
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
};
export default NavBar;
