"use client";
import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "@/context/CartContext";
import Link from "next/link";

const NavBar = () => {
  const cartCtx = useContext(CartContext);
  
  const totalItems = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  
  return (
    <header id="main-header">
      <div className="title">
        <img src="logo.png" alt="logo" />
      </div>
      <nav>
        <Link href="?modal=true">
          <Button > Cart {totalItems>0 && totalItems}</Button>
        </Link>
      </nav>
    </header>
  );
};
export default NavBar;
