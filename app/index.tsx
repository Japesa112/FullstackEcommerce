import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
import { Button, ButtonText } from '@/components/ui/button';

const HomeScreen = () => {
    return (
       
            // View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
            // Text is a component for displaying text.
               <FlatList data={products} 
               numColumns={2}
               contentContainerClassName='gap-2'
               columnWrapperClassName='gap-2'
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