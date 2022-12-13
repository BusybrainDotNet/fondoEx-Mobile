import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Modal, TextInput, Pressable, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function Wallet({ navigation }) {

    

    
    const [showBankTransferDetails, setBankTransferDetails] = useState(false);


    /*
    * Define Page Navigations
    */  
    const cardTransferHandler = () => {
        navigation.navigate('Make Deposit');
    }
    // const virtualTransferHandler = () => {
    //     navigation.navigate('Virtual Transfer');
    // }
    const bankTransferHandler = () => {
        setBankTransferDetails(true);;
    }
    const internalTransferHandler = () => {
        navigation.navigate('Internal Transfer');
    }
    const externalTransferHandler = () => {
        navigation.navigate('External Transfer');
    }



    /*
    * Define User Details
    */  
    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');



    return (
        <>
            <SafeAreaView style={styles.appContainer}>
                
                
                <Modal
                    transparent={true}
                    visible={showBankTransferDetails}
                    animationType='slide'
                    onRequestClose={() => { setBankTransferDetails(false) }}
                    hardwareAccelerated={true}
                >
                    <View style={styles.centered_view}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_header}>
                                <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                                <Text style={styles.bigText}> Bank Transfer Details</Text>
                            </View>
                            <View style={styles.warning_body}>
                                <Text style={{color: '#000', fontSize: 12, textAlign: 'left', padding: '1%'}}>Bank Name: Access Bank</Text>
                                <Text style={{color: '#000', fontSize: 12, textAlign: 'left', padding: '1%'}}>Account Name: Fondo Expreso</Text>
                                <Text style={{color: '#000', fontSize: 12, textAlign: 'left', padding: '1%'}}>Account Number: 0031738415</Text>
                                <Text style={{color: '#ff0000', fontSize: 10, textAlign: 'left', padding: '1%', paddingTop: '10%'}}>Remember To Use Your Member ID As Transfer Memo For Instant Reflection!</Text>
                            </View>
                        
                            <Pressable onPress={() => {setBankTransferDetails(false)}}>
                                <View style={styles.warning_footer}>
                                    <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <ScrollView style={styles.appContainer}>

                    <View style={{marginTop: '5%', }}>
                        <Text style={styles.titleText}>How Do You Want To Add Money Into Your Wallet?</Text>
                    </View>

                    <View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={cardTransferHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Cards | USSD Code</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay By Transfer Code Or Card </Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={bankTransferHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Bank Transfer | Deposit</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay By Deposit Or Transfer</Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={cardTransferHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/profile.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Virtual Account</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}>Pay Into Your Virtual Wallet </Text>
                            </Pressable>
                        </View>
                    </View>
                    

                    <View style={{marginTop: '10%', }}>
                        <Text style={styles.titleText}>Send Money | Make a Transfer</Text>
                    </View>
                    
                    <View style={{flexDirection: 'column',}}>
                        <View style={styles.optionBox}>
                            <Pressable onPress={internalTransferHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/e-pin.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>Internal Transfer</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}> Send To FondoEx User </Text>
                            </Pressable>
                        </View>
                        <View style={styles.optionBox}>
                            <Pressable onPress={externalTransferHandler}>
                                <View style={{flexDirection: 'row', }}>
                                    <Image source={require('../assets/images/icons/deposit.png')} resizeMode='contain' title='Icon' style={{width: 20, height: 20, marginLeft: 5, marginRight: 10,}}></Image>
                                    <Text style={{color: '#2c3691', fontSize: 14, fontWeight: 'bold'}}>External Transfer</Text>
                                </View>
                                <Text style={{color: '#595959', fontSize: 10, marginLeft: '20%', paddingTop: 3,}}> Send To Other Accounts </Text>
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
export default Wallet;
