import React, { useState } from "react";
import "./modal.scss";

function Modal({ showmodal, setShowmodal, children }) {
  function closeFunc() {
    setShowmodal(false);
  }

  return (
    <div className={`modal ${showmodal ? "show__modal" : ""}`}>
      {children}
      <div onClick={closeFunc} className="modal__close">
        X
      </div>
    </div>
  );
}

export default Modal;
