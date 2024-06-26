import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
import Login from './components/Login/Login'
import Navigasi from './components/Navigasi/Navigasi'
import Scan from './components/Scan/Scan'
import Home from './components/Home/Home'
import Checkin from './components/Checkin/Checkin'
import Logout from './components/Logout/Logout'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Navigasi" component={Navigasi} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
          <Stack.Screen name="Checkin" component={Checkin} options={{ headerShown: false }} />
          <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}