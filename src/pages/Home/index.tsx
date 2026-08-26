import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';
import QuoteCard from '@/components/QuoteCard';

import BottomSheetFilter from '@/pages/Home/components/BottomSheetFilter';
import HomeFilter from '@/pages/Home/components/HomeFilter';
import HomeHeader from '@/pages/Home/components/HomeHeader';
import { itemsStorage } from '@/storage/itemsStorage';
import { Quote } from '@/types/quote';

import { styles } from './styles';

export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showBottomSheetFilter, setShowBottomSheetFilter] =
    useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const fetchItems = async () => {
        const items = await itemsStorage.get();
        setQuotes(items);
      };
      fetchItems();
    }, []),
  );

  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <View style={styles.filterContainer}>
        <View style={styles.filterWrapper}>
          <HomeFilter />
        </View>
        <FilterButton onPress={() => setShowBottomSheetFilter(true)} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item?.id?.toString()}
          contentContainerStyle={styles.listContent}
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
