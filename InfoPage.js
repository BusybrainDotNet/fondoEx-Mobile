import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Linking, Image, ImageBackground } from 'react-native';
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
            {/* <ImageBackground style={styles.appContainer} source={require('./assets/images/decor.jpg')}> */}
            <ScrollView>
            <Text style={{fontSize: 20, textAlign: 'center', margin: '5%', marginTop: '20%', color: '#2c3691'}}>Information Portal! </Text>

                <View style={styles.imageContainer}>

                    {/*<Image source={require('./assets/images/logo.png')} title="Splash Image" style={styles.image} />*/}

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/faqs/')} } style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: '10%', padding: '5%', borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>FAQs</Text>
                    </Pressable>

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/contacts/') }} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: '10%', padding: '5%', borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Contact Us</Text>
                    </Pressable>

                    <Pressable onPress={() => { Linking.openURL('https://fondoex.com/terms-of-service/') }} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: '10%', padding: '5%', borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Terms Of Service</Text>
                    </Pressable>

                    <Pressable onPress={homeHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: '10%', padding: '5%', borderRadius: 5 })}>
                        <Text style={{ color: '#fff' }}>Back To Home </Text>
                    </Pressable>

                </View>
            </ScrollView>
        {/* </ImageBackground> */}
        </SafeAreaView>
    );
}



/*
* Export Of The Main App To Screens
*/
export default InfoPage;
