import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';

import Button from '@/components/Button';
import CompleteAmount from '@/components/CompleteAmount';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { itemsStorage } from '@/storage/itemsStorage';
import { limitChars } from '@/utils';

import { styles } from './styles';

export default function NewQuote() {
  const navigation = useNavigation();

  const [title, setTitle] = useState<string>('');
  const [client, setClient] = useState<string>('');
  const [statusChose, setStatusChose] = useState<StatusType>(StatusType.Draft);
  const [discount, setDiscount] = useState<string>('0');
  const [amount, setAmount] = useState<number>(0);
  const [services, setServices] = useState<any[]>([
    {
      id: Math.random().toString(36).substring(2),
      title: 'Design de interfaces',
      price: 2000,
      quantity: 1,
      description: 'Desenvolvimento de aplicativos',
    },
    {
      id: Math.random().toString(36).substring(2),
      title: 'Desenvolvimento de aplicativos',
      price: 1800,
      quantity: 1,
      description: 'Desenvolvimento de um aplicativo de delivery',
    },
  ]);

  const handleSaveItems = async () => {
    const newItem = {
      id: Math.random().toString(36).substring(2),
      title,
      client,
      status: statusChose,
      discountPct: discount,
      items: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await itemsStorage.add(newItem);
      navigation.navigate('Home' as never);
    } catch (error) {
      Alert.alert('Erro', error as string);
    }
  };

  return (
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
          {services.map((service) => {
            return (
              <>
                <View style={styles.serviceRow}>
                  <View style={styles.serviceContent}>
                    <View style={styles.serviceRowTop}>
                      <Text style={styles.serviceTitle}>{service.title}</Text>
                      <Text style={styles.servicePrice}>
                        <CompleteAmount amount={service.price} />
                      </Text>
                    </View>
                    <View style={styles.serviceRowTop}>
                      <Text style={styles.serviceDescription}>
                        {limitChars(service.description)}
                      </Text>
                      <Text style={styles.serviceQuantity}>
                        Qt: {service.quantity}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.serviceEdit}>
                    <MaterialIcons name="edit" size={24} color="#6A46EB" />
                  </View>
                </View>
              </>
            );
          })}
          <Button
            icon={<MaterialIcons name="add" size={24} color="#6A46EB" />}
            label="Adicionar serviço"
            variant="secondary"
            onPress={() => {}}
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
              <Text style={styles.investmentSubtotalValue}>R$ 100,00</Text>
            </View>
          </View>
          <View style={styles.discountRow}>
            <View style={styles.discountField}>
              <Text>Desconto</Text>
              <View style={styles.discountInputWrapper}>
                <Input
                  placeholder=""
                  hasIcon
                  value={discount}
                  onChangeText={setDiscount}
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
            <Text style={styles.discountValue}>-R$ 100,00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Valor total</Text>
            <View>
              <Text style={styles.totalStrikethrough}>R$ 100,00</Text>
              <CompleteAmount
                amount={services.reduce(
                  (total, service) => total + service.price,
                  0,
                )}
              />
            </View>
          </View>
        </InfoCard>
      </View>
      <View style={styles.footer}>
        <Button label="Cancelar" variant="secondary" />
        <Button
          icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          label="Salvar"
          onPress={handleSaveItems}
        />
      </View>
    </ScrollView>
  );
}
