import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Linking } from 'react-native';
import styles from './assets/jsx/index';


/*
* Splash Screen Or Home Page For Users
*/
function InfoPage({ navigation }) {

    const homeHandler = () => {
        navigation.navigate('Home');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }


    return (
        <SafeAreaView style={styles.appContainer}>
            <ScrollView>
                <Text style={styles.text}>Information Portal! </Text>

                <View style={styles.imageContainer}>

                    {/*<Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image} />*/}

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/faqs/')} } style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 15, padding: 10, borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>FAQs</Text>
                    </Pressable>

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/contacts/') }} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 15, padding: 10, borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Contact Us</Text>
                    </Pressable>

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/terms-of-service/') }} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 15, padding: 10, borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Terms Of Service</Text>
                    </Pressable>

                    <Pressable onPress={homeHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 15, padding: 10, borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Back To Home </Text>
                    </Pressable>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



/*
* Export Of The Main App To Screens
*/
export default InfoPage;
