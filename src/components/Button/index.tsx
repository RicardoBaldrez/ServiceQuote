import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from './style';

type ButtonProps = TouchableOpacityProps & {
  icon: React.ReactNode;
  label: string;
}

export default function Button({ icon, label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}