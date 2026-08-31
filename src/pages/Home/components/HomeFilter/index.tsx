import { MaterialIcons } from '@expo/vector-icons';

import Input from '@/components/Input';

import { colors } from '@/theme/colors';

interface HomeFilterProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function HomeFilter({ value, onChangeText }: HomeFilterProps) {
  return (
    <Input
      placeholder="Buscar"
      placeholderTextColor={colors.textMuted}
      hasIcon
      icon={
        <MaterialIcons name="search" size={22} color={colors.textSecondary} />
      }
      value={value}
      onChangeText={onChangeText}
    />
  );
}
