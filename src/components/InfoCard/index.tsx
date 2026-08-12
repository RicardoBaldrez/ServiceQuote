import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import Header from '../Header';

type InfoCardProps = {
  title?: string;
  icon?: React.ComponentProps<typeof MaterialIcons>['name'];
  children: React.ReactNode;
};

export default function InfoCard({ title, icon, children }: InfoCardProps) {
  const renderHeader = () => {
    if (title && icon) {
      return (
        <Header>
          <MaterialIcons name={icon} size={24} color="#6A46EB" />
          <Text>{title}</Text>
        </Header>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {children}
    </View>
  );
}
