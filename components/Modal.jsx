"use client";
import { useSearchParams, usePathname } from "next/navigation";

import Cart from "./Cart";
function Modal() {
  
  
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  

  

  return (
    <>
      {modal && (
        <dialog className="modal-overlay cart">
          <Cart />
        </dialog>
      )}
    </>
  );
}

export default Modal;
