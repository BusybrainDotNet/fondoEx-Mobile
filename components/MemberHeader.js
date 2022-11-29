import React, {useState} from 'react';
import { Image, View, Text, Pressable, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../assets/jsx/index';
import Profile from '../Members/Profile';
import Deposit from '../Members/Deposit';




//Declare Bottom Tab As Tab
const Stack = createNativeStackNavigator();


//Main App Function
function MemberHeader ({ navigation }) {

/*
* Define Route Handlers
*/
const ProfilePageHandler = () => {
    navigation.navigate('Profile');
}
const depositPageHandler = () => {
    navigation.navigate('Deposit');
}



    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');




    return (
        <ImageBackground style={{maxHeight: 150,}} source={require('../assets/images/cta-bg.jpg')}>

            <View style={styles.header}>
                <Text style={styles.greetText}>Welcome Back, {"\n"}{username}</Text>

                <Pressable onPress={ProfilePageHandler} style={{flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end', }}>
                    <Image source={require('../assets/images/profileImg.png')} resizeMode='contain' title="Profile Image" style={styles.favicon} />
                </Pressable>
            </View>

            <View style={styles.fixToText }>
                <Text style={styles.textWallet}>Wallet Balance:  </Text>
                <Text style={styles.textAmount}>{bal} </Text>

                <Pressable onPress={depositPageHandler} style={styles.smallBtn}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '800', textAlign: 'center' }}>  Top Up </Text>
                </Pressable>
            </View>

        </ImageBackground>
    );
}



//Push App To View
export default MemberHeader;