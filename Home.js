import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native';
import styles from './assets/jsx/index';


/*
* Splash Screen Or Home Page For Users
*/
function Home({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }
    const infoHandler = () => {
        navigation.navigate('InfoPage');
    }
    return (
        <SafeAreaView style={styles.appContainer}>
            <ScrollView>
                <Text style={styles.text}>Your Number One Utility Payment Platform In Africa! </Text>

                <Pressable onPress={infoHandler}>
                        <Image style={styles.iconImage} source={require('./assets/images/icons/about.png')}></Image>
                    </Pressable>

                <View style={styles.imageContainer}>
                    <Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image} />

                    <Pressable onPress={registerHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 35, padding: 15, borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>LET'S GET YOU STARTED</Text>
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
* Export Of The Main App To Screens
*/
export default Home;
