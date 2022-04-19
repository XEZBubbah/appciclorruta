import React, {useState, createContext} from "react";

export const AuthContext = createContext({
    auth: undefined,
    idUser: undefined,
    group: undefined,
    login: () => {},
    logout: () => {},
    onGroup: () => {},
    outGroup: () => {},
    asingIdUser: () => {},
});

export function AuthProvider(pros){
    const { children } = pros;
    const [auth, setAuth] = useState(undefined);
    const [group, setGroup] = useState(undefined);
    const [idUser, setidUser] = useState(undefined);

    const login = (userData) => {
        setAuth(userData);
    };
    const logout = () => {
        setAuth(undefined);
        setidUser(undefined);
    };
    const asingIdUser = (id) => {
        setidUser(id);
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
        outGroup,
        asingIdUser,
        idUser
    };

    return(
        <AuthContext.Provider value={valeContext}>
            {children}
        </AuthContext.Provider>
    )
}