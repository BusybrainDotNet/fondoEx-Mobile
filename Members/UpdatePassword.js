import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function UpdatePassword({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }


    return (
        <>
            <SafeAreaView style={styles.appContainer}>
            
                <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Enter Your Current Password To Set New Password</Text>
                </View>

                <ScrollView style={styles.appContainer}>

                    <View>
                        <View style={styles.innerFormContainer}>
                            
                            <Text style={styles.innerLabel}>Current Password</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                            <Text style={styles.innerLabel}>New Password</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />


                            <Pressable onPress={depositPageHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, borderRadius: 5, textAlign: 'center', marginTop: 30,})}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Update</Text>
                            </Pressable>
                            
                            {/* <Pressable onPress={depositPageHandler} style={styles.link}>
                                <Text style={{ color: '#1a84bc', textAlign: 'center', marginTop: 2 }}>Not Yet A member? Register</Text>
                            </Pressable> */}
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    );
}






/*
* Export Of The Main App To Screens
*/
export default UpdatePassword;
