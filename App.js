import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import AccountStack  from './src/components/AccountStack';
import { useState, useEffect } from 'react'
  export default function App() {

    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ status, setStatus ] = useState(false)



    if (loggedIn) {
      return (
        <View style={styles.container}>
          <NavigationBar setLoggedIn={setLoggedIn} />
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
