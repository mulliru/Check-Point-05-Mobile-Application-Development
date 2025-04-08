// src/routes/Routes.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../telas/Home';
import ListaAnimais from '../telas/ListaAnimais';
import FormularioAdocao from '../telas/FormularioAdocao';
import LinksUteis from '../telas/LinksUteis';
import Desenvolvedores from '../telas/Desenvolvedores';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Animais" component={ListaAnimais} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Formulário de Adoção" component={FormularioAdocao} />
        <Stack.Screen name="Links Úteis" component={LinksUteis} />
        <Stack.Screen name="Desenvolvedores" component={Desenvolvedores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
