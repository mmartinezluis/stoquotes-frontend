import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
export default function Portal({ isOpen, children }) {
  const [showPortal, setShowPportal] = useState(false);

  const activate = () => {
    setShowPportal(true);
  };
  const deactivate = () => {
    setShowPportal(false);
  };

  const onClickOutside = (E) => {
    if (E.target.tagName !== "ASIDE") return;
    deactivate();
  };

  useEffect(() => {
    if (isOpen) {
      activate();
    }
  }, [isOpen]);

  if (!showPortal) return null;

  return ReactDOM.createPortal(
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="portal-cover"
      onClick={onClickOutside}
    >
      <div className="portal-area">{children}</div>
    </aside>,
    document.querySelector("#root")
  );
}
