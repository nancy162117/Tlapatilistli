import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";
import { formStyle } from "../../styles";

export default function LoginForm(props) {
    const { changeForm } = props;
    return (
        <View>
            <TextInput
                label="Email o Username"
                style={formStyle.input}
            />
            <TextInput
                label="Contraseña"
                style={formStyle.input}
                
            />

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