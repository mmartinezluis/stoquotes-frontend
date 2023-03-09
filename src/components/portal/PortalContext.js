import { createContext, useMemo, useState } from "react";

const PortalContext = createContext();

function PortalProvider({ children }) {
  const [loginControls, setLoginControls] = useState(_loginControls);

  return (
    <PortalContext.Provider value={{ loginControls, setLoginControls }}>
      {children}
    </PortalContext.Provider>
  );
}

export { PortalProvider, PortalContext };

const _loginControls = {
  isOpen: false,
  isLoginMode: true,
};
