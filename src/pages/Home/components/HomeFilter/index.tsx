import { MaterialIcons } from '@expo/vector-icons';

import Input from '@/components/Input';

export default function HomeFilter() {
  return (
    <Input
      placeholder="Buscar"
      placeholderTextColor="#676767"
      hasIcon
      icon={<MaterialIcons name="search" size={22} color="#4A4A4A" />}
    />
  );
}
