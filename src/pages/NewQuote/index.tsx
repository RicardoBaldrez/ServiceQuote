import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

import Button from '@/components/Button';
import CompleteAmount from '@/components/CompleteAmount';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { styles } from './styles';

export default function NewQuote() {
  const navigation = useNavigation();

  const [statusChose, setStatusChose] = useState<StatusType>(StatusType.Draft);
  const [discount, setDiscount] = useState<string>('0');

  return (
    <ScrollView>
      <Header>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="#4A4A4A" />
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
            />
            <Input
              placeholder="Cliente"
              placeholderTextColor="#676767"
              hasIcon={false}
            />
          </View>
        </InfoCard>
        <InfoCard title="Status" icon="more">
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
          <View style={styles.serviceRow}>
            <View style={styles.serviceContent}>
              <View style={styles.serviceRowTop}>
                <Text style={styles.serviceTitle}>Design de interfaces</Text>
                <Text style={styles.servicePrice}>R$ 100,00</Text>
              </View>
              <View style={styles.serviceRowTop}>
                <Text style={styles.serviceDescription}>
                  Desenvolvimento de aplicativos
                </Text>
                <Text style={styles.serviceQuantity}>Qt: 1</Text>
              </View>
            </View>
            <View style={styles.serviceEdit}>
              <MaterialIcons name="edit" size={24} color="#6A46EB" />
            </View>
          </View>
          <View style={styles.serviceRow}>
            <View style={styles.serviceContent}>
              <View style={styles.serviceRowTop}>
                <Text style={styles.serviceTitle}>Design de interfaces</Text>
                <Text style={styles.servicePrice}>R$ 100,00</Text>
              </View>
              <View style={styles.serviceRowTop}>
                <Text style={styles.serviceDescription}>
                  Desenvolvimento de aplicativos
                </Text>
                <Text style={styles.serviceQuantity}>Qt: 1</Text>
              </View>
            </View>
            <View style={styles.serviceEdit}>
              <MaterialIcons name="edit" size={24} color="#6A46EB" />
            </View>
          </View>
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
              <Text style={styles.investmentItemsCount}>8 itens</Text>
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
              <CompleteAmount amount={100} />
            </View>
          </View>
        </InfoCard>
      </View>
      <View style={styles.footer}>
        <Button label="Cancelar" variant="secondary" />
        <Button
          icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          label="Salvar"
        />
      </View>
    </ScrollView>
  );
}
