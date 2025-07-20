import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import DashboardScreen from './screens/DashboardScreen';
import AddTransactionScreen from './screens/AddTransactionScreen'; // we’ll make this later
import TransactionListScreen from './screens/TransactionListScreen'; // we’ll make this later

const Stack = createNativeStackNavigator(); // 🧠 Creates a navigator with stack-based routing

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        <Stack.Screen name="TransactionList" component={TransactionListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
