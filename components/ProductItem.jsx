import { useContext } from "react";
import { currencyFormatter } from "../util/currencyFormatter";
import Button from "./UI/Button";
import CartContext from "@/context/CartContext";

const ProductItem = ({ product }) => {
  const cartCtx = useContext(CartContext);
  return (
    <li className="product-item">
      <article>
        <img src={product.img} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p className="product-item-price">{currencyFormatter(product.price)}</p>
          <p className="product-item-description">{product.description}</p>
        </div>
        <p className="product-item-actions">
          <Button onClick={() => cartCtx.addItem(product)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};
export default ProductItem;
