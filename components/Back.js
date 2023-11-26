import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Back = () => {
    const navigation = useNavigation();

    return (
        <View style={{marginVertical: 44}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding: 12, display: 'flex', backgroundColor: '#F8F8FB',marginTop:32, marginRight:44, height: 44, width: 44}}>
                <Image source={require("../assets/Arrow1.png")} />
            </TouchableOpacity>
        </View>
    );
};

export default Back;
