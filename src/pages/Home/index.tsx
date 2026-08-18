import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';
import QuoteCard from '@/components/QuoteCard';

import BottomSheetFilter from '@/pages/Home/components/BottomSheetFilter';
import HomeFilter from '@/pages/Home/components/HomeFilter';
import HomeHeader from '@/pages/Home/components/HomeHeader';
import { itemsStorage } from '@/storage/itemsStorage';

export default function HomePage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [showBottomSheetFilter, setShowBottomSheetFilter] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await itemsStorage.get();
      setQuotes(items);
    };
    fetchItems();
  }, []);

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
        }}
      >
        <View style={{ flex: 1 }}>
          <HomeFilter />
        </View>
        <FilterButton onPress={() => setShowBottomSheetFilter(true)} />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <QuoteCard
              id={item.id}
              key={item.id}
              title={item.client}
              description={item.title}
              price={item.price}
              status={item.status}
            />
          )}
        />
      </View>
      {showBottomSheetFilter && (
        <BottomSheetFilter onClose={() => setShowBottomSheetFilter(false)} />
      )}
    </>
  );
}
