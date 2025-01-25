import React from 'react';
import { Text, View, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Button, ButtonText } from '@/components/ui/button';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';

const HomeScreen = () => {
   // const {width} = useWindowDimensions();
   // const numColumns= width > 700 ? 3 : 2
    
    const numColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4,
    });
    return (
       
            // View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
            // Text is a component for displaying text.
               <FlatList data={products} 
               key={numColumns}
               numColumns={numColumns}
               contentContainerClassName='gap-2 max-w-[960px] w-full mx-auto'
               columnWrapperClassName='gap-2'
               className=''
               renderItem={({ item }) => <ProductListItem product={item} /> } />
           
    
    
            );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center', 
        margin: 10,
    },
});

export default HomeScreen;