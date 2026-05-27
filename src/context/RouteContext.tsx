import React, { createContext, useContext, useState, useEffect } from "react";

interface RouteContextType {
  path: string;
  navigate: (path: string) => void;
}

const RouteContext = createContext<RouteContextType>({
  path: "/",
  navigate: () => {},
});

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    window.history.pushState(null, "", newPath);
    setPath(newPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <RouteContext.Provider value={{ path, navigate }}>
      {children}
    </RouteContext.Provider>
  );
}

export function useAppRoute() {
  return useContext(RouteContext);
}
