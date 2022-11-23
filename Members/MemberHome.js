import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image} from 'react-native';
import MemberHeader from '../components/MemberHeader';

/*
* Member Auth Home Screen Or Home Page For Members
*/
function MemberHome({navigation}) {

    const loginHandler = () => {
        navigation.navigate('Login');
    }
    const memberHomeHandler = () => {
        navigation.navigate('MemberHome');
    }
    return (
            <SafeAreaView style={styles.appContainer}>
            <MemberHeader />
                <ScrollView>
                    <Text style={styles.smallText}>Welcome To Your Home Page User! </Text>

                    <View style={styles.imageContainer}>

                        <Pressable onPress={memberHomeHandler} style={({pressed}) => ({backgroundColor: pressed ? '#2c3691' : '#1a84bc', margin: 35, padding: 15, borderRadius: 5}) }>
                            <Text style={{color: '#fff'}}>Make A Transaction</Text>
                        </Pressable>

                        <Pressable onPress={loginHandler} style={styles.link}>
                            <Text style={styles.btnText}>Logout</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}













/*
* CSS Styling Of The App
*/
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        margin: 0,
    },
    text: {
            color: '#fff',
            fontSize: 20,
            paddingTop: 10,
            textAlign: 'center'
        },
    label: {
        color: '#595959',
        fontSize: 12,
        marginTop: 25,
        fontFamily: 'Quicksand'
    },
    textInput: {
        color: '#595959',
        fontSize: 14,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#fff',

    },
    smallText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'center'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        borderRadius: 100 / 2,
        padding: 30,
        width: 250,
        height: 200,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: '#fff',
        fontSize: 14,
        padding: 20,
        textAlign: 'center'
    },
    buttonContainer : {
        color: '#595959',
        margin : 20,
        fontFamily: 'Quicksand'
    },
    btn : {
        width: '60%',
        textColor: '#fff',
        backgroundColor: '#1a84bc',
        borderRadius: 10,
        padding: 20,
        margin: 30,
        fontFamily: 'Quicksand',
        fontWeight: 600,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnText : {
        color: '#1a84bc',
        fontFamily: 'Quicksand'
    }
});



/*
* Export Of The Main App To Screens
*/
export default MemberHome;
