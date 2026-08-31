import { MaterialIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import Button from '@/components/Button';
import Header from '@/components/Header';
import HeaderBackButton from '@/components/HeaderBackButton';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import ServiceInformation from '@/components/ServiceInformation';
import { StatusType } from '@/components/Status/types';

import BottomSheetServices from '@/pages/NewQuote/components/BottomSheetServices';
import InvestmentSummary from '@/pages/NewQuote/components/InvestmentSummary';
import StatusSelector from '@/pages/NewQuote/components/StatusSelector';
import { useServices } from '@/pages/NewQuote/hooks/useServices';
import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { colors } from '@/theme/colors';
import { calculateQuoteTotals, generateId } from '@/utils';

import { styles } from './styles';

export default function NewQuotePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { id } =
    useRoute<RouteProp<RootStackParamList, 'NewQuote'>>().params || {};

  const [title, setTitle] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [statusChose, setStatusChose] = useState<StatusType>(StatusType.Draft);
  const [discountPct, setDiscountPct] = useState<string>('0');
  const [createdAt, setCreatedAt] = useState<string | undefined>(undefined);
  const [quoteNumber, setQuoteNumber] = useState<number | undefined>(undefined);

  const {
    services,
    setServices,
    serviceChosed,
    showBottomSheetServices,
    openBottomSheet,
    closeBottomSheet,
    createService,
    editService,
    deleteService,
  } = useServices();

  const { totalPrice, totalPriceWithDiscount, totalDiscount } =
    calculateQuoteTotals(services, discountPct);

  const handleDiscountChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');

    if (numericText === '') {
      setDiscountPct('');
      return;
    }

    const clamped = Math.min(Number(numericText), 100);
    setDiscountPct(String(clamped));
  };

  const handleSaveItems = async () => {
    if (title === '' || client === '') {
      Alert.alert('Erro', 'Título e cliente são campos obrigatórios');
      return;
    }

    if (services.length === 0) {
      Alert.alert('Erro', 'Ao menos um serviço é necessário no orçamento');
      return;
    }

    const quotePayload = {
      title,
      client,
      price: totalPriceWithDiscount,
      status: statusChose,
      discountPct,
      items: services,
      updatedAt: new Date().toISOString(),
    };

    try {
      if (id) {
        if (!createdAt) {
          Alert.alert(
            'Erro',
            'Orçamento ainda está carregando, tente novamente',
          );
          return;
        }

        await itemsStorage.update({
          ...quotePayload,
          id,
          createdAt,
          quoteNumber,
        });
        Alert.alert('Sucesso', 'Orçamento atualizado com sucesso');
      } else {
        await itemsStorage.add({
          ...quotePayload,
          id: generateId(),
          createdAt: new Date().toISOString(),
        });
        Alert.alert('Sucesso', 'Orçamento criado com sucesso');
      }
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', error as string);
    }
  };

  const getQuote = useCallback(async () => {
    try {
      const quote = await itemsStorage.getById(id as string);
      setTitle(quote?.title ?? '');
      setClient(quote?.client ?? '');
      setStatusChose(quote?.status ?? StatusType.Draft);
      setDiscountPct(quote?.discountPct ?? '0');
      setServices(quote?.items ?? []);
      setCreatedAt(quote?.createdAt);
      setQuoteNumber(quote?.quoteNumber);
    } catch (error) {
      Alert.alert('Erro', error as string);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getQuote();
    }
  }, [id, getQuote]);

  return (
    <>
      <ScrollView>
        <Header>
          <HeaderBackButton
            label="Orçamento"
            onPress={() => navigation.goBack()}
            labelStyle={styles.backButtonText}
          />
        </Header>
        <View style={styles.container}>
          <InfoCard title="Informações gerais" icon="storefront">
            <View style={styles.sectionContent}>
              <Input
                placeholder="Título"
                placeholderTextColor={colors.textMuted}
                hasIcon={false}
                value={title}
                onChangeText={setTitle}
              />
              <Input
                placeholder="Cliente"
                placeholderTextColor={colors.textMuted}
                hasIcon={false}
                value={client}
                onChangeText={setClient}
              />
            </View>
          </InfoCard>
          <InfoCard title="Status" icon="sell">
            <StatusSelector value={statusChose} onChange={setStatusChose} />
          </InfoCard>
          <InfoCard title="Serviços inclusos" icon="article">
            {services.map((service) => (
              <ServiceInformation
                key={service.id}
                service={service}
                onEdit={openBottomSheet}
              />
            ))}
            <Button
              icon={
                <MaterialIcons name="add" size={24} color={colors.primary} />
              }
              label="Adicionar serviço"
              variant="secondary"
              onPress={() => openBottomSheet()}
              style={styles.addServiceButton}
            />
          </InfoCard>
          <InfoCard title="Investimento" icon="credit-card">
            <InvestmentSummary
              itemCount={services.length}
              totalPrice={totalPrice}
              totalDiscount={totalDiscount}
              totalPriceWithDiscount={totalPriceWithDiscount}
              discountPct={discountPct}
              onDiscountChangeText={handleDiscountChange}
            />
          </InfoCard>
        </View>
        <View style={styles.footer}>
          <Button
            label="Cancelar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />
          <Button
            icon={<MaterialIcons name="check" size={24} color={colors.white} />}
            label="Salvar"
            onPress={handleSaveItems}
          />
        </View>
      </ScrollView>
      {showBottomSheetServices && (
        <BottomSheetServices
          onClose={closeBottomSheet}
          onCreate={createService}
          onEdit={editService}
          onDelete={deleteService}
          service={serviceChosed ?? undefined}
        />
      )}
    </>
  );
}
