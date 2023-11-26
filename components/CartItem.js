import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native';

const CartItem = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <View style={{display: 'flex', flexDirection: 'row',borderRadius: 8, alignItems: 'center', gap: 18, backgroundColor: '#F8F8FB', padding: 16}}>
            <Image source={item.img} />
            <View style={{display: 'flex', flex: 1, gap: 4}}>
                <Text style={{color: '#B1B1B1', fontSize: 15}}>{item.name}</Text>
                <Text style={{fontSize: 18}}>{item.tit}</Text>
                <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: '#F08F5F', fontWeight: 700}}>${item.price}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 12, backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 2}}>
                        <Text onPress={()=>{
                            if(quantity<1) return
                            setQuantity(quantity-1)
                        }} style={{fontSize: 18, color: '#F08F5F'}}>-</Text>
                        <Text style={{fontSize: 18}}>{quantity}</Text>
                        <Text onPress={()=>setQuantity(quantity+1)} style={{fontSize: 18, color: '#F08F5F'}}>+</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CartItem;
