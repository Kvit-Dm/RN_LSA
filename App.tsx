import React from 'react';

import Welcome from "./components/Welcome.tsx";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TestComponent from "./components/TestComponent.tsx";

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
      // <Welcome/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Welcome}/>
          <Stack.Screen name='test' component={TestComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
