import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import axios from 'axios'
export default function App() {
  const [reply, setReply] = React.useState({});

  componentDidMount = () => {
    axios.get('https://dev.splitsub.in/api/user/loginOtp')
    .then(res=>{console.log(res)})


  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={"try"} onPress={componentDidMount}/>
      <StatusBar style="auto" />
    </View>
  );
}