import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AddScreen from '../Screens/AddScreen';
import UpdateScreen from '../Screens/UpdateScreen'

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Add" component={AddScreen} />
                <Stack.Screen name="Update" component={UpdateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;