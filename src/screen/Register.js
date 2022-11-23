import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Logo from '../asset/mov.png'
import { useNavigation } from '@react-navigation/native'


const register = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
    <TextInput 
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="white"
    />
    <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white" 
        />
    <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        />
    <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        />  
    <TouchableOpacity style={styles.button}>
    <Text style={styles.textlogin}>Register</Text>
    </TouchableOpacity>
    <View style={styles.container}>
        <Text style={styles.text}> Already have an account?
            <Text style ={{
              fontWeight: 'bold',}}
              onPress={()=> navigation.goBack()}
              > Sign In  </Text>
            </Text>
    </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
        marginTop: 20,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: "white",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: "#fff",
        color: '#fff',
        marginBottom: 5,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    text: {
       color: 'white',
       marginTop: 20,
       textAlign: 'center',
       fontSize: 16,
    },
    textlogin: {
        color: '#000',
       marginTop: 5,
       textAlign: 'center',
       fontSize: 20,
    },
       
})

export default register