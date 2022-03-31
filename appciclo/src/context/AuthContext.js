import React, {useState, createContext} from "react";

export const AuthContext = createContext({
    auth: undefined,
    login: () => {},
    logout: () => {},
});

export function AuthProvider(pros){
    const { children } = pros;
    const [auth, setAuth] = useState(undefined);

    const login = (userData) => {
        setAuth(userData);
    };
    const logout = () => {
        setAuth(undefined);
    };
    const valeContext = {
        auth,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={valeContext}>
            {children}
        </AuthContext.Provider>
    )
}