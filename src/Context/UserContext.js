import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

export const UserContextApi = createContext();
export const UserContextProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <UserContextApi.Provider value={{ CurrentUser }}>
      {children}
    </UserContextApi.Provider>
  );
};
