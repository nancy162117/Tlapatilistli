import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";
import { formStyle } from "../../styles";

export default function LoginForm(props) {
    const { changeForm } = props;
    return (
        <View>


            <Button
                mode="contained"
                style={formStyle.btnSucces}
                
            >
                Entrar
            </Button>
            <Button
                mode="text"
                style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                onPress={changeForm}
            >
                Registrarse
            </Button>
        </View>
    )
}