import { 
  View, 
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Picture from '../asset/Sthing4.jpg'
import Picture1 from '../asset/Orphan.jpg'
import Picture2 from '../asset/train.jpg'



const Homepage = () => {
  
  return ( 
  
    <View style={styles.container}>
    <Text></Text>
    <View style={{justifyContent:'flex-start',alignItems:'center'}}>
    <TextInput 
        style={styles.input}
        placeholder="Search Here"
        placeholderTextColor="#333" 
        />
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={styles.text}> Best Genre </Text>
      <Text style={styles.text1}> more {">>"} </Text>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
     <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Action</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Romance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Thriller</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Comedy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Fantasy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>Drama</Text>
          </TouchableOpacity>
    </View>
    </ScrollView>
   
    <View style={{justifyContent:'center',paddingStart:25}}>
      <Text style={styles.genre}> Hot Thriller Movies </Text>
    </View>
    <ScrollView horizontal={false} vertical={true}>
    <TouchableOpacity style={styles.button1}>
    <View style={{justifyContent:'center', alignItems: 'center'}}>
   <Image source={Picture} style={{flex: 1, width: 300, height: 200, resizeMode:'cover'}}/>
    </View>
    <View>
      <Text style={{color:'#000', fontSize:15 }}>
        When a young boy disappears, his mother, a police chief and his friends must confront 
      terrifying supernatural forces in order to get him back.
      </Text>
    </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
    <View style={{justifyContent:'center', alignItems: 'center'}}>
   <Image source={Picture1} style={{flex: 1, width: 300, height: 200, resizeMode:'cover'}}/>
    </View>
    <View>
      <Text style={{color:'#000', fontSize:15 }}>
      After orchestrating a brilliant escape from an Estonian psychiatric facility, 
      Esther travels to America by impersonating the missing daughter of a wealthy family.
      </Text>
    </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
    <View style={{justifyContent:'center', alignItems: 'center'}}>
   <Image source={Picture2} style={{flex: 1, width: 300, height: 200, resizeMode:'cover'}}/>
    </View>
    <View>
      <Text style={{color:'#000', fontSize:15 }}>
      While a zombie virus breaks out in South Korea, 
      passengers struggle to survive on the train from Seoul to Busan.
      </Text>
    </View>
          </TouchableOpacity>
          
          
   
       </ScrollView>
    </View>
  
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000',
     
  },
    input: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    color: "#000",
    paddingHorizontal: 20,
    marginBottom: 20,
},
  text: {
    color: 'white',
    marginVertical: 5,
    paddingStart: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
 },
 text1:{
  flexDirection: 'row',
  color: '#fff',
  marginVertical: 10,
  fontSize: 13,
  paddingEnd: 25
 },
 button: {
  width: 100,
  height: 50,
  backgroundColor: "#fff",
  borderWidth: 0.5,
  borderRadius: 10,
  marginHorizontal:5,
  marginBottom: 20,
  justifyContent: 'center',
  alignItems: 'center', 
},
button1:{
    backgroundColor: "white",
    marginHorizontal: 10,
    marginBottom: 20,
    marginVertical: 5,
    elevation:3,
    padding: 20,
    borderRadius: 30, 
    borderWidth: 1,
     
},
textbutton: {
  color: '#000',
  fontSize: 15,
},
genre:{
  fontWeight: 'bold',
  color: '#fff',
  fontSize: 20,
  marginBottom: 20, 
},
picture:{
  marginBottom: 10,
  width: 350,
  height: 200,
}


})

export default Homepage