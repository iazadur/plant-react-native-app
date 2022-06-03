import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font'
import Text from './components/text/text';
import { color } from './theme/colors';

export default function App() {

  const [loaded, error] = useFonts({ 
    "Antonio-Medium" : require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold" : require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular" : require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });
  

  return (
    <View style={styles.container}>
      <Text preset='h1'>Open up App.js to start working on your app!</Text>
      <Text preset='h3'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
