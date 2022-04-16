import React, {useState, createContext} from "react";

export const AuthContext = createContext({
    auth: undefined,
    group: undefined,
    login: () => {},
    logout: () => {},
    onGroup: () => {},
    outGroup: () => {},
});

export function AuthProvider(pros){
    const { children } = pros;
    const [auth, setAuth] = useState(undefined);
    const [group, setGroup] = useState(undefined);

    const login = (userData) => {
        setAuth(userData);
    };
    const logout = () => {
        setAuth(undefined);
    };
    const outGroup = () => {
        setGroup(undefined);
    };
    const onGroup = (groupData) => {
        setGroup(groupData);
    };
    const valeContext = {
        auth,
        login,
        logout,
        group,
        onGroup,
        outGroup
    };

    return(
        <AuthContext.Provider value={valeContext}>
            {children}
        </AuthContext.Provider>
    )
}