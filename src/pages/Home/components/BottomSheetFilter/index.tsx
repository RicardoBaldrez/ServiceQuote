import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { styles } from './styles';

export default function BottomSheetFilter() {
  const [checked, setChecked] = useState<StatusType[]>([]);
  const [ordenation, setOrdenation] = useState('Mais recente');

  const ordenationOptions = [
    'Mais recente',
    'Mais antigo',
    'Maior valor',
    'Menor valor',
  ];

  const handleChecked = (status: StatusType) => {
    setChecked((prevStatus: StatusType[]) => {
      return prevStatus.includes(status)
        ? prevStatus.filter((item) => item !== status)
        : [...prevStatus, status];
    });
  };

  const resetFilters = () => {
    setChecked([]);
    setOrdenation('Mais recente');
  };

  return (
    <>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Header>
          <View style={styles.header}>
            <Text style={styles.title}>Filtrar e ordenar</Text>
            <MaterialIcons name="close" size={20} color="#4A4A4A" />
          </View>
        </Header>
        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.titleContent}>Status</Text>
            {Object.values(StatusType).map((status) => (
              <View key={status} style={styles.contentContainer}>
                <Checkbox
                  value={checked.includes(status)}
                  onValueChange={() => handleChecked(status)}
                  style={styles.selectElement}
                  color={checked.includes(status) ? '#6A46EB' : undefined}
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
                  onPress={() => setOrdenation(option)}
                  style={styles.contentContainer}
                >
                  <MaterialIcons
                    name={
                      ordenation === option
                        ? 'radio-button-checked'
                        : 'radio-button-unchecked'
                    }
                    size={24}
                    color={ordenation === option ? '#6A46EB' : undefined}
                    style={{
                      marginRight: 8,
                      color: ordenation === option ? '#6A46EB' : '#676767',
                    }}
                  />
                  <Text key={option}>{option}</Text>;
                </Pressable>
              );
            })}
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            label="Resetar filtros"
            onPress={resetFilters}
            variant="secondary"
          />
          <View style={styles.separator} />
          <Button
            label="Aplicar"
            onPress={() => {}}
            icon={<MaterialIcons name="check" size={24} color="#FFFFFF" />}
          />
        </View>
      </View>
    </>
  );
}
