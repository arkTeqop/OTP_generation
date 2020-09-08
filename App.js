import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './styles';
import axios from 'axios'
export default function App() {
  const [otp, setotp] = React.useState({});

  const getOTP = () => { 
    axios.post('https://dev.splitsub.in/api/user/loginOtp',{countryCode:"+91",username:"8377035582"})
    .then(res=>{console.log(res)})

  }
  const verifyOTP = () => { 
    
    axios.get('https://dev.splitsub.in/api/user/loginOtp',{username:"8377035582",countryCode:"+91",otp:otp})
    .then(console.log(otp)) //res=>{console.log(res)})
    .catch(error=>
      console.log(error));

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"try"} onPress={getOTP}/>
      <TextInput placeholder="OTP" onChangeText={setotp}/>
      <Button title="verify" onPress={verifyOTP}/>

      <StatusBar style="auto" />
    </View>
  );
}