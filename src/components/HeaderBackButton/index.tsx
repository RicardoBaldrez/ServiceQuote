import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';

import { colors } from '@/theme/colors';

import { styles } from './styles';

type HeaderBackButtonProps = {
  label: string;
  onPress: () => void;
  labelStyle?: StyleProp<TextStyle>;
  rightSlot?: React.ReactNode;
};

export default function HeaderBackButton({
  label,
  onPress,
  labelStyle,
  rightSlot,
}: HeaderBackButtonProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color={colors.textSecondary}
        />
        <Text style={labelStyle}>{label}</Text>
      </View>
      {rightSlot}
    </Pressable>
  );
}
