import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Input from '@/components/Input';

import { styles } from './styles';

interface BottomSheetServicesProps {
  onClose: () => void;
  onCreate: (service: any) => void;
  onEdit: (service: any) => void;
  service?: any;
}

export default function BottomSheetServices({
  onClose,
  onCreate,
  onEdit,
  service,
}: BottomSheetServicesProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');

  useEffect(() => {
    setTitle(service?.title ?? '');
    setDescription(service?.description ?? '');
    setPrice(service?.price != null ? String(service.price) : '');
    setQuantity(service?.quantity != null ? String(service.quantity) : '1');
  }, [service]);

  const handleSave = () => {
    if (service) {
      onEdit({ id: service.id, title, description, price, quantity });
    } else {
      onCreate({
        id: Math.random().toString(36).substring(2),
        title,
        description,
        price,
        quantity,
      });
    }
    onClose();
  };

  return (
    <BottomSheet
      title="Serviço"
      onClose={onClose}
      footer={() => (
        <Button
          label="Salvar"
          icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          onPress={handleSave}
        />
      )}
    >
      <View style={styles.container}>
        <Input
          placeholder="Nome"
          hasIcon={false}
          value={title}
          onChangeText={setTitle}
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
