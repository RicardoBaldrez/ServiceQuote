import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  icon,
  label,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        variant === 'secondary' && { backgroundColor: '#F0F0F0' },
      ]}
    >
      {icon}
      <Text
        style={[styles.label, variant === 'secondary' && { color: '#6A46Eb' }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
