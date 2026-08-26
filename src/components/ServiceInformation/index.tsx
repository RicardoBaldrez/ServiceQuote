import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import CompleteAmount from '@/components/CompleteAmount';

import { Service } from '@/types/service';
import { limitChars } from '@/utils';

import { styles } from './styles';

interface ServiceInformationProps {
  service: Service;
  onEdit?: (service: Service) => void;
}

export default function ServiceInformation({
  service,
  onEdit,
}: ServiceInformationProps) {
  return (
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
          <Text style={styles.serviceQuantity}>Qt: {service.quantity}</Text>
        </View>
      </View>
      {onEdit && (
        <Pressable style={styles.serviceEdit} onPress={() => onEdit(service)}>
          <MaterialIcons name="edit" size={24} color="#6A46EB" />
        </Pressable>
      )}
    </View>
  );
}
