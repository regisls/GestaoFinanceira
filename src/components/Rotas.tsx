import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicial from "./Telas/Inicial";

const Stack = createNativeStackNavigator();

export default (props) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicial">
            <Stack.Screen name="Inicial" component={Inicial} options={{title: 'Gestão financeira', headerShown: true}} />
        </Stack.Navigator>
    </NavigationContainer>
);