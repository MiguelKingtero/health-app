import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation,useRootNavigationState } from "expo-router";
import RegisterScreen from '../Register.Screen';


export default function LoginScreen(){
    const navigation = useNavigation();
    const [showRegister, setShowRegister] = useState(false)
    useEffect(()=> {
      navigation.setOptions({headerShown: false});
    },[navigation]);

    if(showRegister){
      return <RegisterScreen onClose={()=> setShowRegister(false)}/>
    }
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Sign in </Text>
          <TextInput 
          style={styles.input}
          placeholder="mmquintero@gmail.com"/>

          <TextInput 
          style={styles.input}
          placeholder="********"
          secureTextEntry/>


          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}> Login</Text>            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={()=>{
              setShowRegister(true)
            }}
          >
            <Text style={styles.buttontext}> reigster </Text>            
          </TouchableOpacity>
        </View>
      );
    }
const styles = StyleSheet.create({
      container: {
        flex : 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#95a5a6 "
      },
      title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20

      },
      input:{
        width: "80%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor:"#CCC"

      },
      button:{
        marginTop: 20,
        backgroundColor: "#007e80",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center"
      },
      buttontext:{
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
      },
    });