import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TextInput,
    TouchableOpacity } from 'react-native'
  import React , { useState } from 'react'
  import Logo from '../asset/mov.png'
  import { useNavigation } from '@react-navigation/native'
  import axios from 'axios'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const App = () => {
    const navigation = useNavigation();
    const [nip, setNip] = useState("3000");
    const [password, setPassword] = useState("123");

    const handleLogin = async (value) => {
      console.log('value', value);
      try{
        const response = await axios.post('http://192.168.100.10:3200/users/login',{
           nip: value.nip,
        pasword: value.pasword
        })
      if (response.data.status == 200){
        console.log('response', response.data)
        navigation.navigate('Homepage')
        // AsyncStorage.setItem
        // await AsyncStorage.setItem('password', value.password)
        // await AsyncStorage.setItem('nip', value.nip)
        // await AsyncStorage.setItem('name', response.data.data.nama)
      }
    } catch (error){
      console.log(error.message)
    }
  }
      return (
        <View style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo}
        />
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontWeight: "bold",
              marginBottom : 20,
            }}
          >
          Movie mov</Text>
          <View style={styles.container1}>
          <TextInput
           style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                    onChangeText={(nip) => setNip(nip)}
                    value={nip}
            />
          <TextInput
                style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
            />
          <TouchableOpacity 
          style={styles.button}
          onPress={async () => {
                        await handleLogin({ nip, password });
                    }}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
            <Text style={styles.text}> Don't have an account?
            <Text style={{fontWeight: 'bold',}}
            onPress={()=> navigation.navigate('RegisterScreen')}
            > sign up </Text>
            </Text>
           </View> 
        </View>
      )
          }
      
        
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 30,
    },
    container1: {
      width: "80%",
      height: 50,
      
    },
    input: {
      backgroundColor: "#5f5f5f",
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      paddingHorizontal: 15,
      marginBottom: 10,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#fff",
      color: '#fff',
      marginBottom: 5,
      padding: 10,
      borderRadius: 10,
      alignItems: "center", 
    },
    textLogin: {
      color: "#000",
      fontSize: 20,
      fontWeight: "bold",
    },
    text:{
      color: "#fff",
      fontSize: 15,
      marginBottom: 20,
      
    }
  })
  
  export default App