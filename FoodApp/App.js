import {View,StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';

import { useFonts } from "expo-font";
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    Bold:require("./src/assets/fonts/Poppins-Bold.ttf"),
    SemiBold:require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    Medium:require("./src/assets/fonts/Poppins-Medium.ttf"),
    Regular:require("./src/assets/fonts/Poppins-Regular.ttf"),
 });
 if (!loaded) {
   return false;
 }
  return(

    <View style={{flex:1,}}>
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" />
      <Navigation />
    </View>
  )
}
