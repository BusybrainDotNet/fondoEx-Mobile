import { StyleSheet } from 'react-native';


/*
* CSS Styling Of The App
*/
const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        fontFamily: 'open sans',
        backgroundColor: '#fff',
    },

    backgroundImageContainer: {
        flex: 1,
        padding: 5
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        margin: 0,
    },

    formContainer: {
        flex: 1,
        marginTop: '5%',
        paddingTop: '5%',
        padding: '5%',
        margin: '8%',
        borderWidth: 1,
        borderColor: '#1a84bc',
        borderRadius: 10,
        backgroundColor: '#000',
        shadowColor: '#fff',
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 50,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    },

    label: {
        color: '#fff',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'open sans'
    },

    textInput: {
        color: '#595959',
        fontSize: 16,
        padding: 5,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#1a84bc',
        backgroundColor: '#fff',

    },

    dangerText: {
        color: '#ff0000',
        fontSize: 12,
        margin: 10,
        textAlign: 'center',
    },

    smallText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 20,
        textAlign: 'left'
    },

    bigText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },

    smallBlackText: {
        color: '#000',
        fontSize: 14,
        margin: 10,
        textAlign: 'left'
    },

    bigBlackText: {
        color: '#000',
        fontSize: 18,
        margin: 10,
        textAlign: 'left'
    },

    titleText: {
        color: '#2c3691',
        fontSize: 14,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    footMenu: {
        color: '#fff',
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
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

    iconImage: {
        flexDirection: 'column',
        borderRadius: 100 / 2,
        padding: 15,
        width: 20,
        height: 15,
        backgroundColor: '#fff',
        margin: 2,
    },

    link: {
        color: '#fff',
        fontSize: 14,
        padding: 20,
        textAlign: 'left'
    },

    buttonContainer: {
        color: '#595959',
        margin: 20,
    },

    smallBtn: {
        textColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 2,
        margin: 10,
        fontWeight: 600,
        width: 80,
    },
    
    btn: {
        width: '60%',
        textColor: '#fff',
        backgroundColor: '#1a84bc',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        fontWeight: 600,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },

    btnText: {
        color: '#1a84bc',
    },

    centered_view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    warning_modal: {
        width: 250,
        borderWidth: 3,
        borderColor: '#1a84bc',
        borderRadius: 10,
        color: '#1a84bc',
        backgroundColor: '#1a84bc',
    },

    warning_header: {
        height: 50,
        padding: 15,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: '#1a84bc',
        alignItems: 'center',
        flexDirection: 'row',
    },

    warning_body: {
        padding: 15,
        backgroundColor: '#fff',
        fontFamily: 'open sans',
        alignItems: 'center',
    },

    warning_footer: {
        height: 50,
        padding: 10,
        borderTopWidth: 2,
        borderStartColor: '#1a84bc',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#fff',
        fontFamily: 'open sans',
        alignItems: 'center',
    },

   favBox: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
    },

    serviceBox: {
        width: 90,
        backgroundColor: '#D9E4EC',
        borderRadius: 10,
        color: '#385E72', 
        margin: 10,
        padding: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    boxImage: {
        width: 20,
        height: 25,
        marginLeft: 5,
        resizeMode: 'contain',
    },

    boxText: {
        color: '#595959',
        fontSize: 8,
        fontWeight: 'bold',
    },

    boxLink: {
        padding: 10,
        textAlign: 'center',
    },

    balanceBox: {
        borderRadius: 5,
        color: '#385E72', 
        margin: 5,
        alignContent: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    optionBox: {
        margin: 10,
        padding: 10, 
        borderWidth: 0.2, 
        borderColor: '#385E72', 
        borderRadius: 10, 
        flexDirection: 'row',
    },

    header: {
        height: 70,
        padding: 15,
        margin: 0,
        flexDirection: 'row',
        marginBottom: 10,
        opacity: 9,
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    textWallet: {
        color: 'white',
        fontSize: 14,
        paddingRight: 1,
        paddingTop: 10,
    },

    textAmount: {
        color: 'white',
        fontSize: 14,
        paddingRight: 40,
        paddingTop: 12,
    },

    greetText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'left',
    },

    favicon: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        maxWidth: 50,
        maxHeight: 40,
        paddingTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'flex-end',
    },

    header: {
        top: 0,
        height: 30,
        padding: 5,
        flexDirection: 'row',
        margin: 5,
    },

    textHome: {
        color: '#1a84bc',
        fontSize: 15,
        textAlign: 'left',
        paddingLeft: 100,
        paddingTop: 5,
    },

    textHome1: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'left',
        paddingTop: 5,
    },

    faviconHome: {
        radius: '50%',
        maxWidth: 80,
        maxHeight: 40,
        padding: 5
    },

    faviconProfile: {
        radius: '50%',
        borderWidth: 2,
        borderColor: '#1a84bc',
        maxWidth: 100,
        maxHeight: 100,
        padding: 10,
        marginTop: '5%',
        marginLeft: '35%',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 100/2,
    },
    
    addDeposit: {
        marginTop: 25,
        marginBottom: 5, 
        marginRight: 20, 
        marginLeft: 20, 
        padding: 5, 
        fontSize: 40, 
        color: '#1a84bc',
        borderWidth: 1,
        borderColor: '#1a84bc', 
        borderRadius: 100/2,
    },

    innerFormContainer: {
        flex: 1,
        marginTop: '5%',
        paddingTop: '5%',
        padding: '1%',
        margin: '8%',
        backgroundColor: '#fff',
        shadowColor: '#fff',
    },

    innerLabel: {
        color: '#595959',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'open sans'
    },

    

    innerTextInput: {
        color: '#595959',
        fontSize: 14,
        padding: 3,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#595959',
        backgroundColor: '#fff',

    },

});




/*
* Export Of The Main App To Screens
*/
export default styles;
