import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from '../components/Back';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingHorizontal: 18, backgroundColor: '#fff'}}>
            <Back />
            <View style={{position: 'relative'}}>
                <View style={[styles.center, styles.shadow, {paddingBottom: 80, borderRadius: 18, paddingHorizontal: 18, paddingTop: 18}]}>
                    <Image source={require("../assets/Checkout.png")} />
                    <View style={{display: 'flex', alignItems: 'flex-end', gap:4}}>
                        <Text style={{fontSize: 20, color: '#25d482', fontWeight: 700}}>$1.527</Text>
                        <Text style={{color: '#b1b1b1'}}>Including GTS(18%)</Text>
                    </View>
                </View>
                <View style={[styles.center, {position: 'absolute', bottom: -30, backgroundColor: '#fff', marginHorizontal: 12, borderBottomWidth: 1,}]}>
                    <Image style={{flex: 1}} source={require("../assets/credit.png")} />
                    <View style={[styles.center, {flex:1, gap: 8, justifyContent: 'center'}]}>
                        <Image source={require("../assets/Apple.png")} />
                        <Image style={{marginTop: 6}} source={require("../assets/ApplePay.png")} />
                    </View>
                </View>
            </View>
            <View style={{marginTop: 52, gap: 22, display: 'flex'}}>
                <View>
                    <Text style={{fontSize: 18,marginBottom: 8, fontWeight: 600,}}>Card number</Text>
                    <View style={[styles.center, styles.txt]}>
                        <Text style={{fontSize: 18}}>5262 16283 92934</Text>
                        <View style={[styles.center, {gap: 12}]}>
                            <Image source={require('../assets/Mastercard.png')}/>
                            <Image source={require('../assets/CardIcon.png')}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize: 18,marginBottom: 8, fontWeight: 600,}}>Cardholder name</Text>
                    <View style={{padding: 18, backgroundColor: '#F8F8FB', borderRadius: 12}}>
                        <Text style={{fontSize: 18}}>Christle Doe</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.center]}>
                        <Text style={{fontSize: 18, marginBottom: 8, fontWeight: 600,}}>Expiry data</Text>
                        <Text style={{fontSize: 18}}>CVV/CVC</Text>
                    </View>
                    <View style={[styles.center, {gap: 18}]}>
                        <Text style={[styles.txt,{fontSize: 18, flex: 1, textAlign: 'center'}]}>06 / 2024</Text>
                        <Text style={[styles.txt,{fontSize: 18, flex: 1, textAlign: 'center'}]}>915</Text>
                    </View>
                </View>
            </View>
            <Text style={{textAlign: 'center', marginVertical: 18}}>We will send you an order details to your email after the successfull payment</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={[styles.center, {justifyContent: 'center', backgroundColor: '#25D482', borderRadius: 18}]}>
                <Image source={require('../assets/pay.png')}/>
            </TouchableOpacity>
        </View>
    );
};

export default Payment;
const styles = StyleSheet.create({
    center: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    shadow: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
        width: -4,
        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4
    },
    txt: {
        backgroundColor: '#f8f8f8', padding: 18,  borderRadius: 12
    }
});