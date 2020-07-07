import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';


const Stack = createStackNavigator(); //Navegacion de tipo stack

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle : {
              backgroundColor : '#F4511E',
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
              fontWeight : 'bold'
            },
            headerTitleAlign : 'center',

          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
/*             options={{
              title : "Componente Principal",
              headerStyle : {
                backgroundColor : '#F4511E',
              },
              headerTintColor : '#fff',
              headerTitleStyle : {
                fontWeight : 'bold'
              },
              headerTitleAlign : 'center',

            }} */
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({route}) => ({
              title : route.params.clienteID,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({

})
