import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginSignup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="phone-message" size={120} color="black" />
            <Text style={{ fontSize: 20 }}>Login/Signup with Login</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginHorizontal: 40 }}>
                <Text style={{ fontSize: 20, marginTop: 20 }}>+91</Text>
                <TextInput
                    style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, paddingLeft: 10 }}
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType="phone-pad"
                />
            </View>

            {otpSent ? (
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, marginTop: 20 }}>Enter OTP</Text>
                    <TextInput
                        style={{ width: '100%', height: 35, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
                        placeholder="Enter OTP"
                        value={otp}
                        onChangeText={(text) => setOtp(text)}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => console.log('Login')} disabled={otpSent} >
                        <Text style={{ fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            ) :

                <TouchableOpacity style={{ marginTop: 20, borderColor: 'gray', borderWidth: 1 }} onPress={() => setOtpSent(true)}>
                    <Text style={{ fontSize: 20 }}>Send OTP</Text>
                </TouchableOpacity>
            }



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 120
    },

});

export default LoginSignup;