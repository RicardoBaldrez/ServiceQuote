import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Input from '@/components/Input';

import { styles } from './styles';

export default function NewQuote() {
  return (
    <>
      <Header>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#4A4A4A" />
          <Text style={{ color: '#0F0F0F', fontSize: 14, fontWeight: '600' }}>
            Orçamento
          </Text>
        </View>
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
      </View>
    </>
  );
}
