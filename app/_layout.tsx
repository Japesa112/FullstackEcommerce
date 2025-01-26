import { Link, router, Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import {ShoppingCart} from 'lucide-react-native';
import { Text, TouchableOpacity} from "react-native";
import { useCart } from "@/store/cartStore";

export default function RootLayout() {

  const cartItemsNums = useCart((state: any) => state.items.length);
  
  const queryClient = new QueryClient();
  const test = () => {
    alert("I am here");
  }
  return (
    <QueryClientProvider client={queryClient}>
  <GluestackUIProvider>
   
    <Stack   
    screenOptions={{headerRight: () => cartItemsNums > 0 && (
    
    <TouchableOpacity onPress={() => {router.push('/Cart')}} className="gap-2 flex-row" >
      <Icon as={ShoppingCart}  color="red"  />
      <Text>{cartItemsNums} </Text>
      </TouchableOpacity>),
    }} >
   
      <Stack.Screen name="index"  options={{title: 'Shop'}}  />
      <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
    </Stack>
    
    </GluestackUIProvider>
    
    </QueryClientProvider>
    );
}
