import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from '@/routes';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
