import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Header from '../components/Header';
import styles from '../assets/jsx/index';



/*
* Forgot Password Page For Members
*/
function Forgot({ navigation }) {

    /*
    * Define Route Handlers
    */
    const loginHandler = () => {
        navigation.navigate('Forgot');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }



    /*
    * Define Form State Handlers
    */
    const [email, setEmail] = useState(' ');
    const [submitted, setSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);


    /*
   Handle FOrm Submittion
   */
    const forgotFormHandler = () => {

        if (email.length < 5) {
            setShowWarning(true);
        } else {
            /*const formFields = [user: email, pass: password,];*/
            setSubmitted(!submitted);
        }
    }




    return (
        <SafeAreaView style={styles.appContainer}>
            <ImageBackground style={styles.appContainer} source={require('../assets/images/decor.jpg')}>

            {/*ALERT FOR USERS BEGIN */}
            <Modal
                transparent={true}
                visible={showWarning}
                transparent={true}
                animationType='slide'
                onRequestClose={() => { setShowWarning(false) }}
                hardwareAccelerated={true}
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_header}>
                            <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                            <Text style={styles.bigText}>Notification Alert!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.dangerText}>Insufficient Details In One Or More Form Fields!</Text>
                        </View>

                        <Pressable onPress={() => { setShowWarning(false) }} android_ripple={{ color: '#fff' }}>
                            <View style={styles.warning_footer}>
                                <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/*ALERT FOR USERS ENDS */}


            <Header />
            <ScrollView>
                <View>
                    <View style={styles.formContainer}>
                        <Text style={styles.text}>Reset Password</Text>

                        <Text style={styles.label}>Email ID</Text>
                            <TextInput onChangeText={(value) => { setEmail(value) }} style={styles.textInput} keyboardType='email-address' placeholder="fondoex@member.com" />

                        <Pressable onPress={forgotFormHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', marginTop: 30, padding: 15, borderRadius: 5, })}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Continue</Text>
                        </Pressable>

                        <Pressable onPress={registerHandler} style={styles.link}>
                            <Text style={{ color: '#1a84bc', textAlign: 'center', marginTop: 2 }}>Not Yet A member? Register</Text>
                        </Pressable>

                    </View>
                    <Text style={styles.footText}>Your Number One Utility Payment Platform In Africa! </Text>
                </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}





/*
* Export Of The Main App To Screens
*/
export default Forgot;
