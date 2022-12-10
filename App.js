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
import Referral from './Members/Referral';
import Deposit from './Members/Deposit';
import Notification from './Members/Notification';

/*Create Stack For Navigations*/
const Stack = createNativeStackNavigator();


/*
* Main App For Users Screen
*/
const App = () => {
    return (
        <>
            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen options={{header: () => null}} name="Home" component={Home} />
                    <Stack.Screen options={{header: () => null}} name="Login" component={Login} />
                    <Stack.Screen options={{header: () => null}} name="Forgot" component={Forgot} />
                    <Stack.Screen options={{header: () => null}} name="Register" component={Register} />
                    <Stack.Screen options={{header: () => null}} name="InfoPage" component={InfoPage} />
                    <Stack.Screen options={{header: () => null}} name="MemberHome" component={MemberHome} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Referral" component={Referral} />
                    <Stack.Screen name="Deposit" component={Deposit} />
                    <Stack.Screen name="Notification" component={Notification} />
                </Stack.Navigator>

            </NavigationContainer>
        </>
    );
}


/*
* Export Of The Main App To Screens
*/
export default App;
