import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';




//Main App Function
const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo.png')} resizeMode= 'stretch' title="Official Logo" style={styles.favicon} />
            <Text style={styles.text}>Fondo</Text>
            <Text style={styles.text1}>Ex</Text>
        </View>
    );
}




//CSS Styling Of The App
const styles = StyleSheet.create({
    header: {
        top: 0,
        height: 50,
        padding: 5,
        flexDirection: 'row',
        marginBottom: 30,
    },
    text: {
        color: '#1a84bc',
        fontSize: 30,
        textAlign: 'left',
        paddingLeft: 100,
        paddingTop: 5,
        fontFamily: 'Quicksand'
    },
    text1: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'left',
        paddingTop: 5,
        fontFamily: 'Quicksand'
    },
    favicon: {
        radius: '50%',
        maxWidth: 80,
        maxHeight: 60,
        padding: 5
    }
});




//Push App To View
export default Header;