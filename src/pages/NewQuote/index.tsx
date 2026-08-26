import { MaterialIcons } from '@expo/vector-icons';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';

import Button from '@/components/Button';
import CompleteAmount from '@/components/CompleteAmount';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import ServiceInformation from '@/components/ServiceInformation';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import BottomSheetServices from '@/pages/NewQuote/components/BottomSheetServices';
import { RootStackParamList } from '@/routes';
import { itemsStorage } from '@/storage/itemsStorage';
import { calculateQuoteTotals, formatCurrency } from '@/utils';

import { styles } from './styles';

export default function NewQuotePage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [showBottomSheetServices, setShowBottomSheetServices] = useState(false);

  const { id } =
    useRoute<RouteProp<RootStackParamList, 'NewQuote'>>().params || {};

  const [title, setTitle] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [statusChose, setStatusChose] = useState<StatusType>(StatusType.Draft);
  const [discountPct, setDiscountPct] = useState<string>('0');
  const [services, setServices] = useState<any[]>([]);
  const [createdAt, setCreatedAt] = useState<string | undefined>(undefined);
  const [quoteNumber, setQuoteNumber] = useState<number | undefined>(undefined);
  const [serviceChosed, setServiceChosed] = useState<any>(null);

  const { totalPrice, totalPriceWithDiscount, totalDiscount } =
    calculateQuoteTotals(services, discountPct);

  const handleSaveItems = async () => {
    if (title === '' || client === '') {
      Alert.alert('Erro', 'Título e cliente são campos obrigatórios');
      return;
    }

    if (id) {
      const updateItem = {
        id,
        title,
        client,
        price: totalPriceWithDiscount,
        status: statusChose,
        discountPct,
        items: services,
        createdAt,
        updatedAt: new Date().toISOString(),
        quoteNumber,
      };

      try {
        await itemsStorage.update(updateItem);
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Erro', error as string);
      }
    } else {
      const newItem = {
        id: Math.random().toString(36).substring(2),
        title,
        client,
        price: totalPriceWithDiscount,
        status: statusChose,
        discountPct,
        items: services,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      try {
        await itemsStorage.add(newItem);
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Erro', error as string);
      }
    }
  };

  const handleCreateService = (service: any) => {
    setServices((prev) => [...prev, service]);
  };

  const handleEditService = (service: any) => {
    setServices((prev) => prev.map((s) => (s.id === service.id ? service : s)));
  };
  const handleDeleteService = (service: any) => {
    setServices((prev) => prev.filter((s) => s.id !== service.id));
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
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={20} color="#4A4A4A" />
            <Text style={styles.backButtonText}>Orçamento</Text>
          </Pressable>
        </Header>
        <View style={styles.container}>
          <InfoCard title="Informações gerais" icon="storefront">
            <View style={styles.sectionContent}>
              <Input
                placeholder="Título"
                placeholderTextColor="#676767"
                hasIcon={false}
                value={title}
                onChangeText={setTitle}
              />
              <Input
                placeholder="Cliente"
                placeholderTextColor="#676767"
                hasIcon={false}
                value={client}
                onChangeText={setClient}
              />
            </View>
          </InfoCard>
          <InfoCard title="Status" icon="sell">
            <View style={styles.statusList}>
              {Object.values(StatusType).map((status) => (
                <Pressable
                  key={status}
                  onPress={() => setStatusChose(status)}
                  style={styles.statusOption}
                >
                  <MaterialIcons
                    name={
                      statusChose === status
                        ? 'radio-button-checked'
                        : 'radio-button-unchecked'
                    }
                    size={24}
                    color={statusChose === status ? '#6A46EB' : '#676767'}
                    style={[
                      styles.statusRadioIcon,
                      { color: statusChose === status ? '#6A46EB' : '#676767' },
                    ]}
                  />
                  <Status key={status} status={status} />
                </Pressable>
              ))}
            </View>
          </InfoCard>
          <InfoCard title="Serviços inclusos" icon="article">
            {services.map((service) => (
              <ServiceInformation
                key={service.id}
                service={service}
                onEdit={(service) => {
                  setShowBottomSheetServices(true);
                  setServiceChosed(service);
                }}
              />
            ))}
            <Button
              icon={<MaterialIcons name="add" size={24} color="#6A46EB" />}
              label="Adicionar serviço"
              variant="secondary"
              onPress={() => setShowBottomSheetServices(true)}
              style={styles.addServiceButton}
            />
          </InfoCard>
          <InfoCard title="Investimento" icon="credit-card">
            <View style={styles.investmentRow}>
              <Text>Subtotal </Text>
              <View style={styles.investmentSubtotalMeta}>
                <Text style={styles.investmentItemsCount}>
                  {services.length} itens
                </Text>
                <Text style={styles.investmentSubtotalValue}>
                  R$ {formatCurrency(totalPrice)}
                </Text>
              </View>
            </View>
            <View style={styles.discountRow}>
              <View style={styles.discountField}>
                <Text>Desconto</Text>
                <View style={styles.discountInputWrapper}>
                  <Input
                    placeholder=""
                    hasIcon
                    value={discountPct}
                    onChangeText={setDiscountPct}
                    keyboardType="numeric"
                    icon={
                      <MaterialIcons
                        name="percent"
                        size={14}
                        color="black"
                        style={styles.percentIcon}
                      />
                    }
                  />
                </View>
              </View>
              {totalDiscount > 0 && (
                <Text style={styles.discountValue}>
                  -R$ {formatCurrency(totalDiscount)}
                </Text>
              )}
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Valor total</Text>
              <View>
                {totalDiscount > 0 && (
                  <Text style={styles.totalStrikethrough}>
                    R$ {formatCurrency(totalPrice)}
                  </Text>
                )}
                <CompleteAmount amount={totalPriceWithDiscount} />
              </View>
            </View>
          </InfoCard>
        </View>
        <View style={styles.footer}>
          <Button
            label="Cancelar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />
          <Button
            icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
            label="Salvar"
            onPress={handleSaveItems}
          />
        </View>
      </ScrollView>
      {showBottomSheetServices && (
        <BottomSheetServices
          onClose={() => {
            setShowBottomSheetServices(false);
            setServiceChosed(null);
          }}
          onCreate={handleCreateService}
          onEdit={handleEditService}
          onDelete={handleDeleteService}
          service={serviceChosed}
        />
      )}
    </>
  );
}
