import React, { useState } from "react";
import  { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScren from "./src/screens/Auth";

export default function App(){
  const [auth, setAuth] = useState(undefined);

  return(
    <PaperProvider>
      { auth ? <Text>Zona de usuarios </Text> : <AuthScren />}
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({});