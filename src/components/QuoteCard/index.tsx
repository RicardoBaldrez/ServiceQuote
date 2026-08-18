import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { formatCurrency } from '@/utils';

import { styles } from './styles';
import InfoCard from '../InfoCard';

type QuoteCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  status: StatusType;
};

export default function QuoteCard({
  id,
  title,
  description,
  price,
  status,
}: QuoteCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('QuoteDetails' as never, { id: id } as never)
      }
    >
      <InfoCard>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Status status={status} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.descriptionPriceContainer}>
              <Text style={styles.description}>R$</Text>
              <Text style={styles.descriptionPrice}>
                {formatCurrency(price)}
              </Text>
            </View>
          </View>
        </View>
      </InfoCard>
    </TouchableOpacity>
  );
}
