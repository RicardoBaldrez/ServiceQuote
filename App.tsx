import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';
import Input from '@/components/Input';

import HomeHeader from '@/pages/Home/components/HomeHeader';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header>
          <HomeHeader />
        </Header>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Input
            placeholder="Buscar"
            placeholderTextColor="#676767"
            hasIcon={true}
            icon={<MaterialIcons name="search" size={22} color="#4A4A4A" />}
          />
          <FilterButton />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
