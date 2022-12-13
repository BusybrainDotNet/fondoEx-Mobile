import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function ExternalTransfer({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }


    return (
        <>
            <SafeAreaView style={styles.appContainer}>
            
                <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Make Transfer To Any Bank Account</Text>
                </View>

                <ScrollView style={styles.appContainer}>

                    <View>
                        <View style={styles.innerFormContainer}>
                            
                            <Text style={styles.innerLabel}>Select bank</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                            <Text style={styles.innerLabel}>Account Number</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                            <Text style={styles.innerLabel}>Amount</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                            <Text style={styles.innerLabel}>Memo</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setPassword(value) }} secureTextEntry={true} placeholder="**********" />

                            <Pressable onPress={depositPageHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, borderRadius: 5, textAlign: 'center', marginTop: 30,})}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Continue</Text>
                            </Pressable>
                            
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
export default ExternalTransfer;
