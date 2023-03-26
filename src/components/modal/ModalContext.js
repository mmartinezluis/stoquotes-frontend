import React, { createContext, useCallback, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(initialState);

  const showModal = useCallback((content, status = 1, time = 3000) => {
    setModalContent({
      content: content,
      status: statusCodes[status] || "green",
    });
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, time);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, showModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };

const statusCodes = {
  1: "green", // success
  2: "red", // error, invalid input
  3: "gray", //not found
};

const initialState = {
  content: "",
  status: statusCodes[1],
};
