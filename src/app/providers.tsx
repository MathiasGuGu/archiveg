"use client";

import { createContext, useEffect, useState } from "react";

type UserContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const userContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
export function Providers({ children, user }: any) {
  useEffect(() => {
    setCurrent(user);
  }, [user]);
  const [current, setCurrent] = useState(null);
  return (
    // @ts-ignore: Unreachable code error

    <userContext.Provider value={{ current, setCurrent }}>
      {children}
    </userContext.Provider>
  );
}
