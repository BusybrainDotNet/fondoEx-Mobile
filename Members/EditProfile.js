import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function EditProfile({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }


    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                <ScrollView style={styles.appContainer}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.faviconProfile} />
                
                    <View>
                        <Text style={styles.titleText}> {username} </Text>
                        
                        <Pressable onPress={depositPageHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, marginTop: '10%', borderRadius: 5, textAlign: 'center', maxWidth: '50%', marginLeft: '25%',})}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Upload Profile Image</Text>
                        </Pressable>
                    </View>

                    <View>
                        <View style={styles.innerFormContainer}>

                            <Text style={styles.innerLabel}>First Name</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setEmail(value)} } keyboardType='email-address' placeholder="First Name" />
                            <Text style={styles.innerLabel}>Last Name</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setEmail(value)} } keyboardType='email-address' placeholder="Last Name" />
                            <Text style={styles.innerLabel}>Email ID</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setEmail(value)} } keyboardType='email-address' placeholder="fondoex@member.com" />
                            <Text style={styles.innerLabel}>Password</Text>
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
export default EditProfile;
