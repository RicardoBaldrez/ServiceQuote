import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface FilterButtonProps {
  onPress: () => void;
}

export default function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name="filter-list" size={25} color="#6A46EB" />
    </TouchableOpacity>
  );
}
