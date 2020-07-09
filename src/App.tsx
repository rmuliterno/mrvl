import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { View, Text, StatusBar } from "react-native";

import Routes from "./routes";

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#cc0d0d" />
        <Routes />
    </NavigationContainer>
);

export default App;
