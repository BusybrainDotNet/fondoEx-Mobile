import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Register from './auth/Register';
import MemberHome from './Members/MemberHome';
import Header from './components/Header';
import MemberHeader from './components/MemberHeader'


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
              <Stack.Screen name="MemberHome" component={MemberHome} />
            </Stack.Navigator>
    </NavigationContainer>
    </>
    );
}







/*
* CSS Styling Of The App
*/
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        margin: 0,
    },
    text: {
            color: '#fff',
            fontSize: 20,
            paddingTop: 10,
            textAlign: 'center'
        },
    label: {
        color: '#595959',
        fontSize: 12,
        marginTop: 25,
        fontFamily: 'Quicksand'
    },
    textInput: {
        color: '#595959',
        fontSize: 14,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#fff',

    },
    smallText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        borderRadius: 100 / 2,
        padding: 30,
        width: 250,
        height: 200,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: '#fff',
        fontSize: 14,
        padding: 20,
        textAlign: 'center'
    },
    buttonContainer : {
        color: '#595959',
        margin : 20,
        fontFamily: 'Quicksand'
    },
    btn : {
        width: '60%',
        textColor: '#fff',
        backgroundColor: '#1a84bc',
        borderRadius: 10,
        padding: 20,
        margin: 30,
        fontFamily: 'Quicksand',
        fontWeight: 600,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnText : {
        color: '#1a84bc',
        fontFamily: 'Quicksand'
    }
});



/*
* Export Of The Main App To Screens
*/
export default App;
