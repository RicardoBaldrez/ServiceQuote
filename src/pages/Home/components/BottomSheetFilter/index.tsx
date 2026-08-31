import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { styles } from './styles';

interface BottomSheetFilterProps {
  onClose: () => void;
  checked: StatusType[];
  ordenation: string;
  onApply: (checked: StatusType[], ordenation: string) => void;
}

export default function BottomSheetFilter({
  onClose,
  checked,
  ordenation,
  onApply,
}: BottomSheetFilterProps) {
  const [draftChecked, setDraftChecked] = useState<StatusType[]>(checked);
  const [draftOrdenation, setDraftOrdenation] = useState(ordenation);

  const ordenationOptions = [
    'Mais recente',
    'Mais antigo',
    'Maior valor',
    'Menor valor',
  ];

  const handleChecked = (status: StatusType) => {
    setDraftChecked((prevStatus: StatusType[]) => {
      return prevStatus.includes(status)
        ? prevStatus.filter((item) => item !== status)
        : [...prevStatus, status];
    });
  };

  const resetFilters = () => {
    setDraftChecked([]);
    setDraftOrdenation('Mais recente');
    onApply([], 'Mais recente');
  };

  return (
    <BottomSheet
      title="Filtrar e ordenar"
      onClose={onClose}
      footer={(close) => (
        <>
          <Button
            label="Resetar filtros"
            onPress={resetFilters}
            variant="secondary"
          />
          <View style={styles.separator} />
          <Button
            label="Aplicar"
            onPress={() => {
              onApply(draftChecked, draftOrdenation);
              close();
            }}
            icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          />
        </>
      )}
    >
      <View style={styles.contentItem}>
        <Text style={styles.titleContent}>Status</Text>
        {Object.values(StatusType).map((status) => (
          <View key={status} style={styles.contentContainer}>
            <Checkbox
              value={draftChecked.includes(status)}
              onValueChange={() => handleChecked(status)}
              style={styles.selectElement}
              color={draftChecked.includes(status) ? '#6A46EB' : undefined}
            />
            <Status key={status} status={status} />
          </View>
        ))}
      </View>
      <View style={styles.contentItem}>
        <Text style={styles.titleContent}>Ordenação</Text>
        {ordenationOptions.map((option) => {
          return (
            <Pressable
              key={option}
              onPress={() => setDraftOrdenation(option)}
              style={styles.contentContainer}
            >
              <MaterialIcons
                name={
                  draftOrdenation === option
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={24}
                color={draftOrdenation === option ? '#6A46EB' : undefined}
                style={[
                  styles.radioIcon,
                  draftOrdenation === option
                    ? styles.radioIconActive
                    : styles.radioIconInactive,
                ]}
              />
              <Text key={option}>{option}</Text>
            </Pressable>
          );
        })}
      </View>
    </BottomSheet>
  );
}
