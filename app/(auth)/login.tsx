import { login, register } from "@/api/auth";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import React, { useState } from "react";
	
export default function Login() {
          const [showPassword, setShowPassword] = useState(false);
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState(""); 
          
          
          const setUser = useAuth((state: any) => state.setUser);
          const setToken = useAuth((state: any) => state.setToken);
          const isLoggedIn = useAuth((state: any) => !!state.token);

          const loginMutation =  useMutation({
            mutationFn: () => login(email, password), onSuccess: (data) => {
                if(data.user  && data.token) {
                    setUser(data.user);
                    setToken(data.token);
                }
              
              
            },
            onError: () => {
              alert("Login failed");
            },

          });

          const signUpMutation =  useMutation({
            mutationFn: () => register(email, password), onSuccess: (data) => {
                if(data.user  && data.token) {
                    setUser(data.user);
                    setToken(data.token);
                }
            },
            onError: () => {
              alert("Signing Up failed");
            },

          });



          const handleState = () => {
            setShowPassword((showState) => {
              return !showState;
            });
          };

          if (isLoggedIn) {
            return  <Redirect href={"/"} />;
          }


          return (
            <FormControl 
               isInvalid={loginMutation.isError || signUpMutation.isError}
                className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2">
              <VStack space="xl">
                <Heading className="text-typography-900 pt-3">Login</Heading>
                <VStack space="xs">
                  <Text className="text-typography-500">Email</Text>
                  <Input className="min-w-[250px]">
                    <InputField  value={email} type="text" onChangeText={setEmail} />
                  </Input>
                </VStack>
                <VStack space="xs">
                  <Text className="text-typography-500">Password</Text>
                  <Input className="text-center"  >
                    <InputField type={showPassword ? "text" : "password"} value={password} onChangeText={setPassword} />
                    <InputSlot className="pr-3" onPress={handleState}>
                      <InputIcon
                        as={showPassword ? EyeIcon : EyeOffIcon}
                      />
                    </InputSlot>
                  </Input>
                </VStack>
                <HStack space="4xl" >
                <Button variant="outline"
                   
                    onPress={() => signUpMutation.mutate()}
                >
                
                  <ButtonText>Sign Up</ButtonText>
                </Button>
                <Button
                  className="flex-1"
                  onPress={() => loginMutation.mutate()}
                >
                  <ButtonText>Sign In</ButtonText>
                </Button>
                </HStack>
              </VStack>
            </FormControl>
          );
        }