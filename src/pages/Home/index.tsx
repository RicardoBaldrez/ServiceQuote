import { View } from 'react-native';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';

import HomeFilter from './components/HomeFilter';
import HomeHeader from './components/HomeHeader';

export default function HomePage() {
  return (
    <>
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
        <HomeFilter />
        <FilterButton />
      </View>
    </>
  );
}
