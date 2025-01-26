import { Link, router, Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import {ShoppingCart} from 'lucide-react-native';
import { Pressable, TouchableOpacity} from "react-native";

export default function RootLayout() {
  
  const queryClient = new QueryClient();
  const test = () => {
    alert("I am here");
  }
  return (
    <QueryClientProvider client={queryClient}>
  <GluestackUIProvider>
   
    <Stack   
    screenOptions={{headerRight: () => (<TouchableOpacity onPress={() => {router.push('/Cart')}} >
      <Icon as={ShoppingCart}  color="red"  />
      </TouchableOpacity>),
    }} >
   
      <Stack.Screen name="index"  options={{title: 'Shop'}}  />
      <Stack.Screen name="product/[id]" options={{title: 'Product'}} />
    </Stack>
    
    </GluestackUIProvider>
    
    </QueryClientProvider>
    );
}
