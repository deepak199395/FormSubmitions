import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/UserSlice';
import { useNavigation } from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ShowOnform = () => {

  const navigation=useNavigation()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null)

 const dispatch= useDispatch()

  const validate = () => {
    let valid = true;
    if (name == "") {
      valid = false;
    }
    if (email == "") {
      valid = false;
    }
    if (phone == "") {
      valid = false;
    }
    if (address == "") {
      valid = false;
    }
    return valid;
  };

const selectImageFromCamera=()=>{
launchCamera({mediaType:'photo'},(response)=>{
  if(!response.didCancel){
    setImage(response.uri)
  }
})
  }
  const selectImageFromGallery=()=>{
    launchImageLibrary({mediaType:'photo'},(response)=>{
      if(!response.didCancel){
        setImage(response.uri)
      }
    })
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <TouchableOpacity onPress={selectImageFromGallery}>
          <Text style={styles.input}>SELECT IMAGE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={selectImageFromCamera}>
        <Text style={styles.input}>Tack A photo</Text>
        </TouchableOpacity>
        <TextInput style={styles.input}
           placeholder='Name'
            value={name} 
            onChangeText={txt => setName(txt)} />

        <TextInput style={styles.input} 
        placeholder='Email'
         keyboardType='email-address'
          value={email}
          onChangeText={txt=>setEmail(txt)}
          />


        <TextInput style={styles.input} 
        placeholder='Phone' 
        keyboardType='phone-pad'
         maxLength={10} 
         value={phone}
         onChangeText={txt=>setPhone(txt)}
         />

        <TextInput style={styles.input}
         placeholder='Address'
          value={address}
          onChangeText={txt=>setAddress(txt)}
          />

        <TouchableOpacity style={styles.btn} onPress={() => {
          if (validate) {
       dispatch(addUser({ name,email,phone,address,image: image || null }))
       navigation.goBack()

          } else {
            Alert.alert("fill all the blank")
          }
        }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "black",
    height: 500,
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10
  },
  btn: {
    alignSelf: "center"
  }
});

export default ShowOnform;
