import React,{ useState, useEffect, createContext} from 'react';
import { auth, generateUserDocument } from "../../firebase";

export const AuthContext = createContext({ currentUser: null });

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setCurrentUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
};

export default UserProvider;