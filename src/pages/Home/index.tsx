import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';
import QuoteCard from '@/components/QuoteCard';
import { StatusType } from '@/components/Status/types';

import BottomSheetFilter from '@/pages/Home/components/BottomSheetFilter';
import HomeFilter from '@/pages/Home/components/HomeFilter';
import HomeHeader from '@/pages/Home/components/HomeHeader';
import { itemsStorage } from '@/storage/itemsStorage';
import { Quote } from '@/types/quote';
import { formatCurrency } from '@/utils';

import { styles } from './styles';

export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showBottomSheetFilter, setShowBottomSheetFilter] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [checked, setChecked] = useState<StatusType[]>([]);
  const [ordenation, setOrdenation] = useState('Mais recente');

  const visibleQuotes = useMemo(() => {
    return quotes
      .filter(
        (quote) =>
          quote.client.toLowerCase().includes(search.toLowerCase()) ||
          quote.title.toLowerCase().includes(search.toLowerCase()) ||
          formatCurrency(quote.price).includes(search),
      )
      .filter((quote) => checked.length === 0 || checked.includes(quote.status))
      .sort((a, b) => {
        switch (ordenation) {
          case 'Mais antigo':
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          case 'Maior valor':
            return b.price - a.price;
          case 'Menor valor':
            return a.price - b.price;
          case 'Mais recente':
          default:
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
        }
      });
  }, [quotes, search, checked, ordenation]);

  const handleApplyFilters = (
    nextChecked: StatusType[],
    nextOrdenation: string,
  ) => {
    setChecked(nextChecked);
    setOrdenation(nextOrdenation);
  };

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
          <HomeFilter value={search} onChangeText={setSearch} />
        </View>
        <FilterButton onPress={() => setShowBottomSheetFilter(true)} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={visibleQuotes}
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
        <BottomSheetFilter
          onClose={() => setShowBottomSheetFilter(false)}
          checked={checked}
          ordenation={ordenation}
          onApply={handleApplyFilters}
        />
      )}
    </>
  );
}
