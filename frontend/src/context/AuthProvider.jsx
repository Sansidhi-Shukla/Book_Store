import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

/* children passed in this as all other components like App.jsx , banner etc will be passed. This will help us to use authprovider in all those components */
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [auth, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[auth, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

/* this API is created so that we can access our user globally */
/* context here is created to see that only authoreized user can see the contents */
