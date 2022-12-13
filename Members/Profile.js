import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Profile({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


    const depositPageHandler = () => {
        navigation.navigate('Deposit');
    }
    const editProfileHandler = () => {
        navigation.navigate('EditProfile');
    }


    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                <ScrollView style={styles.appContainer}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.faviconProfile} />
                
                    <View>
                        <Text style={styles.titleText}> {username} </Text>
                        
                        <Pressable onPress={editProfileHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, marginTop: '10%', borderRadius: 5, textAlign: 'center', maxWidth: '50%', marginLeft: '25%',})}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Edit Profile</Text>
                        </Pressable>
                    </View>

                    <View style={{paddingRight: '5%', paddingLeft: '5%', paddingTop: '20%'}}>
                        <View style={{padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Full Name</Text>
                            <Text style={styles.smallBlackText}>Tommy Kimberly</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Username</Text>
                            <Text style={styles.smallBlackText}>Tomkim</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Email ID</Text>
                            <Text style={styles.smallBlackText}>Tomkim@gmail.com</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Phone Number</Text>
                            <Text style={styles.smallBlackText}>+1 218-288-2067</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Date Of Birth</Text>
                            <Text style={styles.smallBlackText}>20-11-1900</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Home Adrress</Text>
                            <Text style={styles.smallBlackText}>20 Kimberly Drive, Auston</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>City</Text>
                            <Text style={styles.smallBlackText}>Texas</Text>
                        </View>
                        <View style={{borderTopWidth: 0.3, borderTopColor: '#595959', padding: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.smallBlackText}>Country</Text>
                            <Text style={styles.smallBlackText}>United States</Text>
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
export default Profile;
