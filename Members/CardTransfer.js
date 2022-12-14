import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Modal, Image } from 'react-native';
import styles from '../assets/jsx/index';



/*
* Member Auth Home Screen Or Home Page For Members
*/
function CardTransfer({ navigation }) {

    const [username, setUsername] = useState('Tom Kim');
    const [bal, setBal] = useState('#25,000');


/*
* Define Form State Handlers
*/
   const [amount, setAmount] = useState(' ');
   const [memo, setMemo] = useState(' ');
   const [submitted, setSubmitted] = useState(false);
   const [showFormFieldWarning, setFormFieldWarning] = useState(false);
   const [showTransactionWarning, setTransactionWarning] = useState(false);



/*
Handle Form Submittion
*/
    const depositFormHandler = () => {

        if (amount.length < 3 || memo.length < 5) {
            setFormFieldWarning(true);
        } else {
           /*const formFields = [user: email, pass: password,];*/
            if (amount > "25000" && memo != "Transaction Memo") {
                setSubmitted(!submitted);
            } else {
               setTransactionWarning(true);
            }
        }
    }


    return (
        <>
            <SafeAreaView style={styles.appContainer}>

                {/*ALERT FOR USERS BEGIN */}
                <Modal
                    transparent={true}
                    visible={showFormFieldWarning}
                    animationType='slide'
                    onRequestClose={() => { setFormFieldWarning(false) }}
                    hardwareAccelerated={true}
                >
                    <View style={styles.centered_view}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_header}>
                                <Image source={require('../assets/images/icons/Alert.png')} resizeMode='stretch' title="Alert" style={styles.iconImage} />
                                <Text style={styles.bigText}> Notification Alert!</Text>
                            </View>
                            <View style={styles.warning_body}>
                                <Text style={styles.dangerText }> Insufficient Details In One Or More Form Fields!</Text>
                            </View>
                        
                            <Pressable onPress={() => { setFormFieldWarning(false)}}>
                                <View style={styles.warning_footer}>
                                    <Text style={{ color: '#000', fontSize: 18, }}>Ok</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                {/*END OF ALERT FOR USERS */}


            
                <View style={{marginTop: '5%', }}>
                    <Text style={styles.titleText}>Enter Amount And Transaction Memo To Make a Deposit</Text>
                </View>

                <ScrollView style={styles.appContainer}>

                    <View>
                        <View style={styles.innerFormContainer}>
                            
                            <Text style={styles.innerLabel}>Amount</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setAmount(value) }} secureTextEntry={true} placeholder="Enter Amount" />

                            <Text style={styles.innerLabel}>Memo</Text>
                            <TextInput style={styles.innerTextInput} onChangeText={(value) => { setMemo(value) }} secureTextEntry={true} placeholder="Transaction Memo" />


                            <Pressable onPress={depositFormHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#2c3691' : '#1a84bc', padding: 15, borderRadius: 5, textAlign: 'center', marginTop: 30,})}>
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
export default CardTransfer;
