import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';


const Stack = createNativeStackNavigator();





/*
* Splash Screen Or Home Page For Users
*/
function Home({navigation}) {

    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }
    return (
            <SafeAreaView style={styles.appContainer}>
                <ScrollView>
                    <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>

                    <View style={styles.imageContainer}>
                        <Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image}/>

                        <Pressable onPress={registerHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 35, padding: 15, borderRadius: 5}) }>
                            <Text style={{color: '#fff'}}>LET'S GET YOU STARTED</Text>
                        </Pressable>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Text style={styles.btnText}>Already A Member? Login</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}







/*
* Login Page For Members
*/
function Login({navigation}){

/*
* Define Route Handlers
*/
    const loginHandler = () => {
        navigation.navigate('Home');
    }
    const forgotHandler = () => {
        navigation.navigate('Forgot');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }


    return (
        <SafeAreaView style={styles.appContainer}>
        <Header />
        <ScrollView>
            <View>
                <Text style={styles.text}>Welcome Back</Text>

                <Text style={styles.label}>Email ID</Text>
                <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} placeholder="**********" />


                <Pressable onPress={forgotHandler} style={styles.link}>
                    <Text style={{color: '#1a84bc', textAlign: 'right'}}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={loginHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', marginTop: 5, padding: 15, borderRadius: 5, textAlign: 'center',}) }>
                    <Text style={{color: '#fff', textAlign: 'center'}}>CONTINUE</Text>
                </Pressable>
                <Pressable onPress={registerHandler} style={styles.link}>
                    <Text style={{color: '#1a84bc', textAlign: 'center', marginTop: 20}}>Not Yet A member? Register</Text>
                </Pressable>
                <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}









/*
* Forgot Password Page For Members
*/
function Forgot({navigation}){

/*
* Define Route Handlers
*/
    const loginHandler = () => {
        navigation.navigate('Forgot');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }


    return (
        <SafeAreaView style={styles.appContainer}>
        <Header />
        <ScrollView>
            <View>
                <Text style={styles.text}>Reset Password</Text>

                <Text style={styles.label}>Email ID</Text>
                <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />

                <Pressable onPress={loginHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', marginTop: 40, padding: 15, borderRadius: 5, textAlign: 'center',}) }>
                    <Text style={{color: '#fff', textAlign: 'center'}}>CONTINUE</Text>
                </Pressable>
                <Pressable onPress={registerHandler} style={styles.link}>
                    <Text style={{color: '#1a84bc', textAlign: 'center', marginTop: 20}}>Not Yet A member? Register</Text>
                </Pressable>
                <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}








/*
* Registration Page For Users
*/
function Register({navigation}){
/*
* Define Route Handlers
*/
    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.appContainer}>
        <Header />
        <ScrollView>
            <View>
                <Text style={styles.smallText}>Fill The Form Fields Below To Become A Member</Text>

                <Text style={styles.label}>First Name</Text>
                <TextInput style={styles.textInput} placeholder="Johnson" />
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.textInput} placeholder="Darey" />
                <Text style={styles.label}>Email ID</Text>
                <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} placeholder="**********" />

                <Pressable onPress={loginHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', marginTop: 40, padding: 15, borderRadius: 5, textAlign: 'center',}) }>
                    <Text style={{color: '#fff', textAlign: 'center'}}>CONTINUE</Text>
                </Pressable>
                <Pressable onPress={loginHandler} style={styles.link}>
                    <Text style={{color: '#1a84bc', textAlign: 'center', marginTop: 20}}>Already A member? Login</Text>
                </Pressable>

                <Text style={styles.smallText}>Your Number One Utility Payment Platform In Africa! </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}








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
