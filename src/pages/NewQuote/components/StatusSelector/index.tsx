import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import Status from '@/components/Status';
import { StatusType } from '@/components/Status/types';

import { colors } from '@/theme/colors';

import { styles } from './styles';

type StatusSelectorProps = {
  value: StatusType;
  onChange: (status: StatusType) => void;
};

export default function StatusSelector({
  value,
  onChange,
}: StatusSelectorProps) {
  return (
    <View style={styles.statusList}>
      {Object.values(StatusType).map((status) => (
        <Pressable
          key={status}
          onPress={() => onChange(status)}
          style={styles.statusOption}
        >
          <MaterialIcons
            name={
              value === status
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            size={24}
            color={value === status ? colors.primary : colors.textMuted}
            style={[
              styles.statusRadioIcon,
              { color: value === status ? colors.primary : colors.textMuted },
            ]}
          />
          <Status key={status} status={status} />
        </Pressable>
      ))}
    </View>
  );
}
