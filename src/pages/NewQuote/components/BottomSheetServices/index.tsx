import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Input from '@/components/Input';

import { Service } from '@/types/service';
import { generateId } from '@/utils';

import { styles } from './styles';

interface BottomSheetServicesProps {
  onClose: () => void;
  onCreate: (service: Service) => void;
  onEdit: (service: Service) => void;
  onDelete: (service: Service) => void;
  service?: Service;
}

export default function BottomSheetServices({
  onClose,
  onCreate,
  onEdit,
  onDelete,
  service,
}: BottomSheetServicesProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    setTitle(service?.title ?? '');
    setDescription(service?.description ?? '');
    setPrice(service?.price != null ? String(service.price) : '');
    setQuantity(service?.quantity != null ? String(service.quantity) : '1');
    setShowDeleteButton(service?.id !== undefined);
  }, [service]);

  const handleSave = () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (
      trimmedTitle === '' ||
      trimmedDescription === '' ||
      price === '' ||
      quantity === ''
    ) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    const servicePayload = {
      title: trimmedTitle,
      description: trimmedDescription,
      price: Number(price),
      quantity: Number(quantity),
    };

    if (service) {
      onEdit({ id: service.id, ...servicePayload });
    } else {
      onCreate({
        id: generateId(),
        ...servicePayload,
      });
    }
    onClose();
  };

  const handleDelete = () => {
    if (!service) return;

    Alert.alert(
      'Excluir serviço',
      'Tem certeza que deseja excluir esse serviço?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            onDelete(service);
            Alert.alert('Sucesso', 'Serviço removido com sucesso');
            onClose();
          },
        },
      ],
    );
  };

  return (
    <BottomSheet
      title="Serviço"
      onClose={onClose}
      footer={() => (
        <View style={styles.footerButtons}>
          {showDeleteButton && (
            <Button
              variant="rounded"
              onPress={handleDelete}
              icon={<MaterialIcons name="delete" size={24} color="#DB4D4D" />}
            />
          )}
          <Button
            label="Salvar"
            icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
            onPress={handleSave}
          />
        </View>
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
          style={styles.descriptionInput}
        />
        <View style={styles.priceQuantityContainer}>
          <View style={styles.priceInputWrapper}>
            <Input
              placeholder="Preço"
              hasIcon={false}
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.quantityInputWrapper}>
            <Input
              placeholder="Quantidade"
              hasIcon={false}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}
