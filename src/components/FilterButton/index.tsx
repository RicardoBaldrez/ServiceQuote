import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function FilterButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name="filter-list" size={25} color="#6A46EB" />
    </TouchableOpacity>
  );
}
