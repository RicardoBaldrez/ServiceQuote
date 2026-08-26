import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '@/pages/Home';
import NewQuotePage from '@/pages/NewQuote';
import QuoteDetailsPage from '@/pages/QuoteDetails';

export type RootStackParamList = {
  Home: undefined;
  NewQuote: { id?: string };
  QuoteDetails: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="NewQuote" component={NewQuotePage} />
        <Stack.Screen name="QuoteDetails" component={QuoteDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
