import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { View } from 'react-native';

import { colors } from '@/theme/colors';

import { styles } from './styles';

type QuoteInfoIconProps = {
  icon: ComponentProps<typeof MaterialIcons>['name'];
};

export default function QuoteInfoIcon({ icon }: QuoteInfoIconProps) {
  return (
    <View style={styles.quoteInfoIcon}>
      <MaterialIcons name={icon} size={20} color={colors.primary} />
    </View>
  );
}
