import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type InputProps = TextInputProps & {
  icon?: React.ReactNode;
  hasIcon?: boolean;
  placeholder: string;
};

export default function Input({
  icon,
  hasIcon = false,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <View style={styles.container}>
      {hasIcon && icon}
      <TextInput
        {...rest}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#676767"
      />
    </View>
  );
}
