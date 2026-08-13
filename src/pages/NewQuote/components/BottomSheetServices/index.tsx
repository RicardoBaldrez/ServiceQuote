import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Input from '@/components/Input';

import { styles } from './styles';

interface BottomSheetServicesProps {
  onClose: () => void;
}

export default function BottomSheetServices({
  onClose,
}: BottomSheetServicesProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('R$0,00');
  const [quantity, setQuantity] = useState('1');

  return (
    <BottomSheet
      title="Serviço"
      onClose={onClose}
      footer={(close) => (
        <Button
          label="Salvar"
          icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          onPress={close}
        />
      )}
    >
      <View style={styles.container}>
        <Input
          placeholder="Nome"
          hasIcon={false}
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Descrição"
          hasIcon={false}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={{
            minHeight: 100,
            borderRadius: 16,
          }}
        />
        <View style={styles.priceQuantityContainer}>
          <View style={{ width: '67%' }}>
            <Input
              placeholder="Preço"
              hasIcon={false}
              value={price}
              onChangeText={setPrice}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Input
              placeholder="Quantidade"
              hasIcon={false}
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}
