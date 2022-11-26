import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image, TouchableOpacity, Modal, ImageBackground, } from 'react-native';
import Header from '../components/Header';
import styles from '../assets/jsx/index';


/*
* Login Page For Members
*/
function Login({ navigation }) {

    /*
    * Define Form State Handlers
    */
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [submitted, setSubmitted] = useState(false);
    const [showLoginWarning, setShowLoginWarning] = useState(false);
    const [showFormFieldWarning, setShowFormFieldWarning] = useState(false);

 /*
Handle FOrm Submittion
*/
    const loginFormHandler = () => {

        if (email.length < 5 || password.length < 5) {
            setShowFormFieldWarning(true);
        } else {
            /*const formFields = [user: email, pass: password,];*/
            if (email.toLowerCase() === "tomkim@gmail.com" && password === "123456") {
                HomePageHandler();
                setSubmitted(!submitted);
            } else {
                setShowLoginWarning(true);
            }
        }
    }
    /*
    * Define Route Handlers
    */
    const HomePageHandler = () => {
        navigation.navigate('MemberHome');
    }
    const forgotHandler = () => {
        navigation.navigate('Forgot');
    }
    const registerHandler = () => {
        navigation.navigate('Register');
    }


    return (
        <SafeAreaView style={styles.appContainer}>
            <ImageBackground style={styles.appContainer} source={require('../assets/images/decor.jpg')}>
                {/*ALERT FOR USERS BEGIN */}
            <Modal
                transparent={true}
                    visible={showFormFieldWarning}
                transparent={true}
                animationType='slide'
                    onRequestClose={() => { setShowFormFieldWarning(false) }}
                hardwareAccelerated={true}
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_header}>
                            <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                            <Text style={styles.bigText}>Notification Alert!</Text>
                        </View>
                    <View style={styles.warning_body}>
                            <Text style={styles.dangerText }>Insufficient Details In One Or More Form Fields!</Text>
                    </View>
                    
                            <Pressable onPress={() => { setShowFormFieldWarning(false)}}>
                        <View style={styles.warning_footer}>
                            <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                        </View>
                     </Pressable>
                    </View>
                </View>
                </Modal>

                <Modal
                    transparent={true}
                    visible={showLoginWarning}
                    transparent={true}
                    animationType='slide'
                    onRequestClose={() => { setShowLoginWarning(false) }}
                    hardwareAccelerated={true}
                >
                    <View style={styles.centered_view}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_header}>
                                <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                                <Text style={styles.bigText}>Notification Alert!</Text>
                            </View>
                            <View style={styles.warning_body}>
                                <Text style={styles.dangerText}>Wrong Credentials, Please Try Again With Correct Credentials Or Use The Forgot Password Link!</Text>
                            </View>

                            <Pressable onPress={() => { setShowLoginWarning(false) }}>
                                <View style={styles.warning_footer}>
                                    <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

{/*ALERT FOR USERS ENDS */}

{/*LOGIN PAGE FOR USERS BEGIN */}
            <Header />
            <ScrollView>
                <View>
                    <View style={styles.formContainer}>
                        <Text style={styles.text}>Welcome Back</Text>

                        <Text style={styles.label}>Email ID</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => { setEmail(value)} } keyboardType='email-address' placeholder="fondoex@member.com" />
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.textInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                        <Pressable onPress={forgotHandler} style={styles.link}>
                            <Text style={{ color: '#1a84bc', textAlign: 'right' }}>Forgot Password?</Text>
                        </Pressable>

                        <Pressable onPress={loginFormHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, borderRadius: 5, textAlign: 'center', })}>
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

/*LOGIN PAGE FOR USERS ENDS */ 




/*
* Export Of The Main App To Screens
*/
export default Login;
