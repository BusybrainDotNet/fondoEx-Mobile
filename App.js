import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

                        <Pressable onPress={registerHandler} style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#595959', margin: 35, padding: 15, borderRadius: 20}) }>
                            <Text style={styles.btnText}>LET'S GET YOU STARTED</Text>
                        </Pressable>
                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Text style={styles.btnText}>Already A member? Login</Text>
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
    const registerHandler = () => {
        navigation.navigate('Register');
    }


    return (
        <SafeAreaView style={styles.appContainer}>
        <ScrollView>
            <View>
                <Text style={styles.text}>Welcome Back</Text>
                <Text style={styles.smallText}>Fill The Form Fields To Login</Text>

                <Text style={styles.label}>Email ID</Text>
                <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} placeholder="**********" />

                <Pressable onPress={loginHandler} style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#595959', margin: 15, padding: 15, borderRadius: 20, textAlign: 'center',}) }>
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>
                <Pressable onPress={registerHandler} style={styles.link}>
                    <Text style={styles.btnText}>Not Yet A member? Register</Text>
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
        <ScrollView>
            <View>
                <Text style={styles.text}>Member Registration</Text>
                <Text style={styles.smallText}>Fill The Form Fields Below To Become A Member</Text>

                <Text style={styles.label}>First Name</Text>
                <TextInput style={styles.textInput} placeholder="Johnson" />
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.textInput} placeholder="Darey" />
                <Text style={styles.label}>Email ID</Text>
                <TextInput style={styles.textInput} placeholder="Dareyjohn@member.com" />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.textInput} placeholder="**********" />

                <Pressable onPress={registerHandler} style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#595959', margin: 15, padding: 15, borderRadius: 20, textAlign: 'center',}) }>
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>

                <Pressable onPress={loginHandler} style={styles.link}>
                    <Text style={styles.btnText}>Already A member? Login</Text>
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
        backgroundColor: '#000'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
    text: {
            color: '#fff',
            fontSize: 20,
            padding: 10,
            textAlign: 'center'
        },
    textInput: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        borderColor: '#fff',

    },
    smallText: {
        color: '#fff',
        fontSize: 14,
        margin: 40,
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
        backgroundColor: '#595959',
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
        color: '#fff',
        fontFamily: 'Quicksand'
    }
});



/*
* Export Of The Main App To Screens
*/
export default App;
