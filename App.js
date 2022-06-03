import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import Text from './components/text/text';
import { color } from './theme/colors';

import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';


export default function App() {
  
  const [loaded, error] = useFonts({ 
    "Antonio-Medium" : require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold" : require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular" : require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });
  
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
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
