import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, View, Text } from 'react-native';

import FilterButton from '@/components/FilterButton';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import QuoteCard from '@/components/QuoteCard';
import { StatusType } from '@/components/Status/types';

import { formatCurrency } from '@/utils/formatCurrency';

import BottomSheetFilter from '@/pages/Home/components/BottomSheetFilter';
import HomeFilter from '@/pages/Home/components/HomeFilter';
import HomeHeader from '@/pages/Home/components/HomeHeader';

export default function HomePage() {
  const [showBottomSheetFilter, setShowBottomSheetFilter] =
    useState<boolean>(false);

  const quotes = [
    {
      id: 1,
      client: 'Desenvolvimento de aplicativo de loja online',
      title: 'Soluções Tecnológicas Beta',
      price: 22300,
      status: StatusType.Sent,
      items: [],
      discountPct: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      client: 'Desenvolvimento de aplicativo de loja online',
      title: 'Soluções Tecnológicas Beta',
      price: 10240,
      status: StatusType.Rejected,
      items: [],
      discountPct: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      client: 'Desenvolvimento de aplicativo de loja online',
      title: 'Soluções Tecnológicas Beta',
      price: 30000,
      status: StatusType.Draft,
      items: [],
      discountPct: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      client: 'Desenvolvimento de aplicativo de loja online',
      title: 'Soluções Tecnológicas Beta',
      price: 15000,
      status: StatusType.Approved,
      items: [],
      discountPct: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

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
      <FlatList
        data={quotes}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <QuoteCard
            key={item.id}
            title={item.client}
            description={item.title}
            price={formatCurrency(item.price)}
            status={item.status}
          />
        )}
      />
      {showBottomSheetFilter && (
        <BottomSheetFilter onClose={() => setShowBottomSheetFilter(false)} />
      )}
      <InfoCard>
        <Header>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <MaterialIcons name="storefront" size={24} color="black" />
            <Text>Informações gerais</Text>
          </View>
        </Header>
        <View style={{ padding: 16, gap: 12 }}>
          <Input
            placeholder="Buscar"
            placeholderTextColor="#676767"
            hasIcon={false}
          />
          <Input
            placeholder="Buscar"
            placeholderTextColor="#676767"
            hasIcon={false}
          />
        </View>
      </InfoCard>
    </>
  );
}
