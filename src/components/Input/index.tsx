import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { colors } from '@/theme/colors';

import { styles } from './styles';

type InputProps = TextInputProps & {
  icon?: React.ReactNode;
  hasIcon?: boolean;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
};

export default function Input({
  icon,
  hasIcon = false,
  placeholder,
  style,
  ...rest
}: InputProps) {
  return (
    <View style={[styles.container, style]}>
      {hasIcon && icon}
      <TextInput
        {...rest}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
      />
    </View>
  );
}
