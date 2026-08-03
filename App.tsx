import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '@/components/Header';

import HomeHeader from '@/pages/Home/components/HomeHeader';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header>
          <HomeHeader />
        </Header>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
