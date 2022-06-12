import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_main from './Components/Home_main';
import Journal_main from './Components/Journal_main';
import { FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name = "Home" component ={Home_main} options = {{

        tabBarIcon:({focused}) => (
          <View>
            <FontAwesome name="home" size={24} color="black" />
          </View>
        )
      }}/>

      
      <Tab.Screen name = "Journal" component ={Journal_main} options = {{

      tabBarIcon:({focused}) => (
        <View>
          <FontAwesome name="pencil-square" size={24} color="black" />
        </View>
      )
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>

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
