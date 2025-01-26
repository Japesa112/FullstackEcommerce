import { Box } from '@/components/ui/box';
import { useCart } from '@/store/cartStore';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

 export default function Cart () {



    const items = useCart((state: any) => state.items);
    console.log("Cart items: ", items);

    return (
        <FlatList 
        data={items}
        renderItem={({ item }) => (
            <Box className="flex-1 items-center p-3">



            <Text>{item.product.name}</Text>
            <Text>{item.product.price}</Text>
            <Text>{item.quantity}</Text>

            </Box>
        )
        
        
        
        }
        />
    );
};
