import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { useCart } from '@/store/cartStore';
import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Redirect } from 'expo-router';

 export default function Cart () {



    const items = useCart((state: any) => state.items);
    console.log("Cart items: ", items);
    const resetCart = useCart((state: any) => state.resetCart);
    const onCheckout = async () => {
        alert('Checkout');
        resetCart();
    }

    if (items.length === 0) {
        return <Redirect href={'/'} />;
    }
    return (
        <FlatList 
        data={items}
        contentContainerClassName='gap-2 max-w-[960px] w-full mx-auto p-3'
        renderItem={({ item }) => (
            <HStack   className='bg-white p-3' >


            <VStack>
            <Text>{item.product.name}</Text>
            <Text>{item.product.price}</Text>
            
            </VStack>
            <Text className='ml-auto' >{item.quantity}</Text>
            
            

            </HStack>
        )}

        ListFooterComponent={() => (
            <Button  onPress={onCheckout} >
                <ButtonText>Checkout</ButtonText>
            </Button>
        )}
        />
    );
};
