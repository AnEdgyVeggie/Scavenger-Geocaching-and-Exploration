// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import AccountStack  from './src/components/AccountStack';

import { useState } from 'react'
// import * as DevClient from 'expo-dev-client';

  export default function App() {

    const [ loggedIn, setLoggedIn ] = useState(false)



    if (loggedIn) {
      return (
        <View style={styles.container}>
          <NavigationBar />
        </View>
      );
    } else {
      return (
        <View style={styles.container} >
          <AccountStack setLoggedIn={setLoggedIn} />
        </View>
      )
    }



}


const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: '#171C26',
  },
});
