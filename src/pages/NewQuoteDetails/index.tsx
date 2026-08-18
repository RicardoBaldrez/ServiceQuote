import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';

import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';

import { styles } from './styles';

export default function NewQuoteDetailsPage() {
  const navigation = useNavigation();

  const [quote, setQuote] = useState<any | null>(null);
  console.log(JSON.stringify(quote, null, 2));

  const { id } =
    useRoute<RouteProp<RootStackParamList, 'QuoteDetails'>>().params;

  const getQuote = async () => {
    try {
      const item = await itemsStorage.getById(id);
      setQuote(item);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao buscar orçamento');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getQuote();
    }, 3000);
  }, [id]);

  if (!quote) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        <InfoCard title="Serviços inclusos" icon="article">
          {quote?.items?.map((service: any) => (
            <ServiceInformation key={service.id} service={service} />
          ))}
        </InfoCard>
      </View>
    </View>
  );
}
