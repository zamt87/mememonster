import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-window-main">
      <div className="modal-content">
        <p>Here are some content.</p>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
