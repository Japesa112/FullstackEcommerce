import React from 'react';
import { Text } from '@/components/ui/text';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Pressable, View} from "react-native";
import { Box } from "@/components/ui/box";
import { ButtonText , Button} from "@/components/ui/button";
import { Card, } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/api/products';
import { useCart } from '@/store/cartStore';



export default function ProductDetailsScreen() {

    const { id } = useLocalSearchParams();

    const addProduct = useCart((state: any) => state.addToCart);
    const cartItems = useCart((state: any) => state.items);
    console.log("Cart items: ", cartItems); 

    const router = useRouter();
    const { data: product, isLoading, error} = useQuery({
        queryKey: ['product', id],
        queryFn:() => getProductById(id),
    });

    if (isLoading) {
        return <ActivityIndicator size='large' color='#0000ff' />;
    }

    if (error) {
        return <Text>Product not found</Text>;
    }

    const addToCart = () => {
      addProduct(product);
      router.push('/Cart');
    };

    return (
       

        <Box className="flex-1 items-center p-3">
            <Stack.Screen name="product/[id]" options={{title: product.name }} />
            
           <Card className="p-5 rounded-lg mx-auto max-w-[960px] w-full flex-1">
           
                     
                   <Image
                     source={{
                       uri: product.image,
                     }}
                     className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                     alt={`${product.name} image`   }
                     resizeMode="contain"
                   />
                   <Text className="text-sm font-normal mb-2 text-typography-700">
                     {product.name}
                   </Text>
                   <VStack className="mb-6">
                     <Heading size="md" className="mb-4">
                       {product.price} 
                     </Heading>
                     <Text size="sm">
                       {product.description}   
                     </Text>
                   </VStack>
                   <Box className="flex-col sm:flex-row">
                     <Button   onPress={addToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                       <ButtonText size="sm">Add to cart</ButtonText>
                     </Button>
                     <Button
                       variant="outline"
                       className="px-4 py-2 border-outline-300 sm:flex-1"
                     >
                       <ButtonText size="sm" className="text-typography-600">
                         Wishlist
                       </ButtonText>
                     </Button>
                   </Box>
                 </Card>
        </Box>
    );
}