import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, useWindowDimensions, ActivityIndicator } from 'react-native';
//import products from '../assets/products.json';
import ProductListItem from '../components/ProductListItem';
//import { Button, ButtonText } from '@/components/ui/button';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { listProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';
import { A } from '@expo/html-elements';
const HomeScreen = () => {
   // const {width} = useWindowDimensions();
   // const numColumns= width > 700 ? 3 : 2
   
    const { data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: listProducts,
    });
   /** 
    * 
    * const [products, setProducts] = useState();
   useEffect(() => {
      const fetchProducts = async () => {

            const data = await listProducts();
            console.log("Data is: ", data);
            setProducts(data);
      }
       fetchProducts();
    }, []); 
   */
   
    
    const numColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4,
    });


    if (isLoading) {
        return <ActivityIndicator size='large' color='#0000ff' />;
    }

    if (error) {
        return <Text>Error fetching data</Text>;
    }
    return (
       
            // View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
            // Text is a component for displaying text.
               <FlatList data={data} 
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