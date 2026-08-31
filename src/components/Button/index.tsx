import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
  label?: string;
  variant?: 'primary' | 'secondary' | 'rounded';
  style?: StyleProp<ViewStyle>;
};

export default function Button({
  icon,
  label,
  variant = 'primary',
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        style,
        styles.container,
        variant === 'secondary' && styles.secondaryContainer,
        variant === 'rounded' && styles.roundedLabel,
      ]}
    >
      {icon}
      {label && variant !== 'rounded' && (
        <Text
          style={[
            styles.label,
            variant === 'secondary' && styles.secondaryLabel,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
