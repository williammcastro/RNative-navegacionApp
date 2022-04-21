import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


// Definir como luce, que informacion va a tener el contexto
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}


//Estado inicial 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
};



//interface para decirle a react como luce y que va a exponer el contexto
export interface AuthContextProps {
    authState: AuthState;
    // signIn: (username: string, favoriteIcon: string) => void;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (icon: string) => void;
    changeUsername: (username: string) => void;
}



// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );
// export const AuthContext = React.createContext<AuthState>(authInitialState);// otra forma de hacerlo


//Componente proveedor del estado, provider
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer( authReducer, authInitialState);

    // console.log('este es authState en AuthProvider:', authState);


    //Disparar acciones para el contexto
    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon' , payload: iconName });
    };

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername' , payload: username });
    };




    return (
        <AuthContext.Provider value={{ 
            authState, 
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    );
};