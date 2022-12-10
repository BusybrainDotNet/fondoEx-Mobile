import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import InfoPage from './InfoPage';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Register from './auth/Register';
import MemberHome from './Members/MemberHome';
import Profile from './Members/Profile';
import Wallet from './Members/Wallet';
import Settings from './Members/Settings';


/*Create Stack For Navigations*/
const Stack = createNativeStackNavigator();


/*
* Main App For Users Screen
*/
const App = () => {
    return (
        <>
            <NavigationContainer>

                <Stack.Navigator screenOptions={{header: () => null}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Forgot" component={Forgot} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="InfoPage" component={InfoPage} />
                    <Stack.Screen name="MemberHome" component={MemberHome} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>

            </NavigationContainer>
        </>
    );
}


/*
* Export Of The Main App To Screens
*/
export default App;
