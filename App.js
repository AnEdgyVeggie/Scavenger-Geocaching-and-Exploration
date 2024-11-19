// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from './src/components/NavigationBar';
// import * as DevClient from 'expo-dev-client';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: '#171C26',
  },
});
