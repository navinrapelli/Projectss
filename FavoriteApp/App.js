import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingScreen from './Screens/StartingScreen';
import ManageScreen from './Screens/ManageScreen';
import MapScreen from './Screens/MapScreen';
import {Ionicons} from '@expo/vector-icons'
import { GlobalStyle } from './Util/Colors';
import { StoreFav } from './redux/StoreFav';
import { Provider } from 'react-redux';
const Stack=createStackNavigator();
export default function App() {
  return (
    <Provider store={StoreFav}>
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
          headerTintColor:"white",
          headerStyle:{backgroundColor:GlobalStyle.colors.orge200},
         }}>
            <Stack.Screen options={({navigation})=>({
              headerTitle:"My Favorite Places",
                headerRight:()=><Ionicons name="add" color="white" size={35} onPress={()=>{
                  navigation.navigate("ManageScreen")
                }}/>
            })}  name='FavoriteList' component={StartingScreen}/>
            <Stack.Screen  name='ManageScreen' component={ManageScreen}/>
            <Stack.Screen  name='Map' component={MapScreen}/>
         </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
