import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import InfoCard from '@/components/InfoCard';
import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { RootStackParamList } from '@/routes';
import { limitChars, formatCurrency } from '@/utils';

import { styles } from './styles';

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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('QuoteDetails', { id: id })}
    >
      <InfoCard>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Status status={status} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{limitChars(description)}</Text>
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
