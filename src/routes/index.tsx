import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Info from "../pages/Info";

const Nav = createStackNavigator();

const NavRoutes: React.FC = () => (
    <Nav.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Nav.Screen name="Dashboard" component={Dashboard} />
        <Nav.Screen name="Info" component={Info} />
    </Nav.Navigator>
);

export default NavRoutes;
