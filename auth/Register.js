import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, TouchableOpacity, Modal, Slider } from 'react-native';
import Header from '../components/Header';
import styles from '../assets/jsx/index';


/*
* Registration Page For Users
*/
function Register({ navigation }) {
    /*
    * Define Route Handlers
    */
    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }

    /*
    * Define Form State Handlers
    */
    const [fname, setFname] = useState(' ');
    const [lname, setLname] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [submitted, setSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);


    /*
   Handle FOrm Submittion
   */
    const registerFormHandler = () => {

        if (fname.length < 5 || lname.length < 5 || email.length < 5 || password.length < 5) {
            setShowWarning(true);
        } else {
            /*const formFields = [user: email, pass: password,];*/
            setSubmitted(!submitted);
        }
    }

    return (
        <SafeAreaView style={styles.appContainer}>

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
                            <Text style={styles.bigText}>Notification Alert!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.dangerText}>Insufficient Details In One Or More Form Fields!</Text>
                        </View>

                        <Pressable onPress={() => { setShowWarning(false) }} android_ripple={{color: '#fff'} }>
                            <View style={styles.warning_footer}>
                                <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/*ALERT FOR USERS ENDS */}

            {/*REGISTRATION PAGE FOR USERS BEGIN */}
            <Header />
            <ScrollView>
                <View>
                    <View style={styles.formContainer}>

                        <Text style={styles.text}> Member Registration</Text>

                        <Text style={styles.label}>First Name</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => {setFname(value)}} maxLength={20} placeholder="Fondo" />
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => {setLname(value)}} maxLength={20} placeholder="Expreso" />
                        <Text style={styles.label}>Email ID</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => { setEmail(value) }} maxLength={50} placeholder="fondoex@member.com" />
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} maxLength={20} placeholder="**********" />

                        <Pressable  onPress={registerFormHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', marginTop: 40, padding: 15, borderRadius: 5, textAlign: 'center', })}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Continue</Text>
                        </Pressable>

                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Text style={{ color: '#1a84bc', textAlign: 'center', marginTop: 2 }}>Already A member? Login</Text>
                        </Pressable>

                    </View>

                    <Text style={styles.footText}>Your Number One Utility Payment Platform In Africa! </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}




/*
* Export Of The Main App To Screens
*/
export default Register;
