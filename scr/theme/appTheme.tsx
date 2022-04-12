import { StyleSheet } from "react-native";

export const colores = {
    primary: "#5856D6",
    // primary: "blue",
    secondary: "green",
}


export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20,
    },
        title: {
        fontSize: 30,
        marginBottom: 20,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 10,
        marginTop: 10,
        justifyContent: 'center',
    },
    textobotonGrande:{
        color: 'white',
        fontSize: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 100,
        height: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
        // paddingStart: 5,
    },
});