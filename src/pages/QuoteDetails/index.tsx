import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';

import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { formatDate } from '@/utils';

import { styles } from './styles';

export default function QuoteDetailsPage() {
  const navigation = useNavigation();

  const [quote, setQuote] = useState<any | null>(null);

  const { id } =
    useRoute<RouteProp<RootStackParamList, 'QuoteDetails'>>().params;

  const getQuote = useCallback(async () => {
    try {
      const item = await itemsStorage.getById(id);
      setQuote(item);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao buscar orçamento');
    }
  }, [id]);

  useEffect(() => {
    getQuote();
  }, [id, getQuote]);

  if (!quote) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <Header>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.pressableHeader}
        >
          <View style={styles.containerContentHeader}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#4A4A4A" />
            <Text>Orçamento #{quote?.id}</Text>
          </View>
          <Status status={quote?.status} />
        </Pressable>
      </Header>
      <View style={styles.containerDetails}>
        <View style={styles.quoteInfoCard}>
          <View style={styles.quoteInfoHeader}>
            <View style={styles.quoteInfoIcon}>
              <MaterialIcons name="storefront" size={20} color="#6A46EB" />
            </View>
            <Text style={styles.quoteInfoTitle}>{quote?.title}</Text>
          </View>
          <View style={styles.quoteInfoClient}>
            <Text style={styles.quoteTitleInfo}>Cliente</Text>
            <Text style={styles.quoteValueInfo}>{quote?.client}</Text>
          </View>
          <View style={styles.quoteInfoDatesRow}>
            <View style={styles.quoteInfoDateItem}>
              <Text style={styles.quoteTitleInfo}>Criado em</Text>
              <Text style={styles.quoteValueInfo}>
                {formatDate(quote?.createdAt)}
              </Text>
            </View>
            <View style={styles.quoteInfoDateItem}>
              <Text style={styles.quoteTitleInfo}>Atualizado em</Text>
              <Text style={styles.quoteValueInfo}>
                {formatDate(quote?.updatedAt)}
              </Text>
            </View>
          </View>
        </View>
        <InfoCard title="Serviços inclusos" icon="article">
          {quote?.items?.map((service: any) => (
            <ServiceInformation key={service.id} service={service} />
          ))}
        </InfoCard>
      </View>
    </View>
  );
}
