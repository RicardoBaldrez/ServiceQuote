import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { styles } from './styles';

export default function NewQuote() {
  const navigation = useNavigation();

  const [statusChose, setStatusChose] = useState<StatusType>(StatusType.Draft);

  return (
    <>
      <Header>
        <Pressable
          style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="#4A4A4A" />
          <Text style={{ color: '#0F0F0F', fontSize: 14, fontWeight: '600' }}>
            Orçamento
          </Text>
        </Pressable>
      </Header>
      <View style={styles.container}>
        <InfoCard>
          <Header>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <MaterialIcons name="storefront" size={24} color="black" />
              <Text>Informações gerais</Text>
            </View>
          </Header>
          <View style={{ padding: 16, gap: 12 }}>
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
        <InfoCard>
          <Header>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <MaterialIcons name="storefront" size={24} color="black" />
              <Text>Status</Text>
            </View>
          </Header>
          <View
            style={{
              padding: 16,
              gap: 12,
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            {Object.values(StatusType).map((status) => (
              <Pressable
                key={status}
                onPress={() => setStatusChose(status)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  marginRight: 40,
                }}
              >
                <MaterialIcons
                  name={
                    statusChose === status
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                  color={statusChose === status ? '#6A46EB' : '#676767'}
                  style={{
                    marginRight: 8,
                    color: statusChose === status ? '#6A46EB' : '#676767',
                  }}
                />
                <Status key={status} status={status} />
              </Pressable>
            ))}
          </View>
        </InfoCard>
      </View>
    </>
  );
}
