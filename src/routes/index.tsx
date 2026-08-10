import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '@/pages/Home';
import NewQuote from '@/pages/NewQuote';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="NewQuote" component={NewQuote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
