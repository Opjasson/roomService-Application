import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={} />
        </Stack.Navigator>
    );
};

export default Route;
