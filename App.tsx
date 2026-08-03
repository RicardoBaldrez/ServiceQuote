import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import HomePage from '@/pages/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <HomePage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
