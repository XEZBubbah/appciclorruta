import React, {useState, createContext} from "react";

export const AuthContext = createContext({
    auth: undefined,
    idUser: undefined,
    group: undefined,
    itinerario: undefined,
    inicio: undefined,
    final: undefined,
    imgUser: undefined,
    puntoi: undefined,
    puntol: undefined,
    login: () => {},
    logout: () => {},
    onGroup: () => {},
    outGroup: () => {},
    asingIdUser: () => {},
    onItinerario: () => {},
    outItinerario: () => {},
    putInicio: () => {},
    deleteInicio: () => {},
    putFinal: () => {},
    deleteFinal: () => {},
    putImgUser: () => {},
    deleteImgUser: () => {},
    putI: () => {},
    putL: () => {},
});

export function AuthProvider(pros){
    const { children } = pros;
    const [auth, setAuth] = useState(undefined);
    const [group, setGroup] = useState(undefined);
    const [idUser, setidUser] = useState(undefined);
    const [itinerario, setItinerario] = useState(undefined);
    const [inicio, setInicio] = useState(undefined);
    const [final, setFinal] = useState(undefined);
    const [imgUser, setImgUser] = useState(undefined);
    const [puntoi, setPuntoI] = useState(undefined);
    const [puntol, setPuntoL] = useState(undefined);

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
    const outItinerario = () => {
        setItinerario(undefined);
    };
    const onItinerario = (groupData) => {
        setItinerario(groupData);
    };
    const putInicio = (groupData) => {
        setInicio(groupData);
    };
    const deleteInicio = () => {
        setInicio(undefined);
    };
    const putFinal = (groupData) => {
        setFinal(groupData);
    };
    const deleteFinal = () => {
        setFinal(undefined);
    };
    const putImgUser = (groupData) => {
        setImgUser(groupData);
    };
    const deleteImgUser = () => {
        setImgUser(undefined);
    };
    const putI = (groupData) => {
        setPuntoI(groupData);
    };
    const putL = (groupData) => {
        setPuntoL(groupData);
    };

    const valeContext = {
        auth,
        idUser,
        group,
        itinerario,
        inicio,
        final,
        imgUser,
        puntoi,
        puntol,
        login,
        logout,
        onGroup,
        outGroup,
        asingIdUser,
        outItinerario,
        onItinerario,
        putInicio,
        deleteInicio,
        putFinal,
        deleteFinal,
        putImgUser,
        deleteImgUser,
        putI,
        putL
    };

    return(
        <AuthContext.Provider value={valeContext}>
            {children}
        </AuthContext.Provider>
    )
}