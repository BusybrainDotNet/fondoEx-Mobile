import React, {useState} from 'react';
import { SafeAreaView,  Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../assets/jsx/index';
import Home from './Home';
import Deposit from './Deposit';
import Profile from './Profile';
import Settings from './Settings';



//Declare Bottom Tab As Tab
const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();

/*
* Member Auth Home Screen Or Home Page For Members
*/
function MemberHome({navigation}) {

    return (
        <SafeAreaView style={styles.appContainer}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    header: () => null,
                    tabBarIcon: ({ tintColor, image, focused }) => {
                    
                        if (route.name === 'Home') {
                            image = focused ? <Image source={require('../assets/images/icons/market.png')} style={styles.boxImage}></Image> : <Image source={require('../assets/images/icons/market.png')} style={styles.boxImage}></Image>;
                            size = focused ? 25 : 10;
                        } else if (route.name === 'Deposit') {
                            image = focused ? <Image source={require('../assets/images/icons/market.png')} style={styles.boxImage}></Image> : <Image source={require('../assets/images/icons/market.png')} style={styles.boxImage}></Image>;
                            size = focused ? 25 : 10;
                        } 
                    }
                })
            }>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Wallet" component={Deposit} />
                <Tab.Screen name="Settings" component={Settings} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>

        </SafeAreaView>
    );
}






/*
* Export Of The Main App To Screens
*/
export default MemberHome;
