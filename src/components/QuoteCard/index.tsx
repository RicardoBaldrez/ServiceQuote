import { View, Text } from 'react-native';

import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { styles } from './styles';
import InfoCard from '../InfoCard';

type QuoteCardProps = {
  title: string;
  description: string;
  price: string;
  status: StatusType;
};

export default function QuoteCard({
  title,
  description,
  price,
  status,
}: QuoteCardProps) {
  return (
    <InfoCard>
      <View style={{ padding: 16 }}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Status status={status} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.descriptionPriceContainer}>
            <Text style={styles.description}>R$</Text>
            <Text style={styles.descriptionPrice}>{price}</Text>
          </View>
        </View>
      </View>
    </InfoCard>
  );
}
