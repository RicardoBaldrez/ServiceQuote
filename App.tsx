import { Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import Button from '@/components/Button';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Button icon={<MaterialIcons name="add" size={22} color="#FFFFFF" />} label="Novo" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
