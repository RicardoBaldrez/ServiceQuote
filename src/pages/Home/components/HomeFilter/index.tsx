import { MaterialIcons } from '@expo/vector-icons';

import Input from '@/components/Input';

interface HomeFilterProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function HomeFilter({ value, onChangeText }: HomeFilterProps) {
  return (
    <Input
      placeholder="Buscar"
      placeholderTextColor="#676767"
      hasIcon
      icon={<MaterialIcons name="search" size={22} color="#4A4A4A" />}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
