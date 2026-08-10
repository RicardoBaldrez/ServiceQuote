import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import Button from '@/components/Button';

import { styles } from './styles';

export default function HomeHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Orçamentos</Text>
        <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
      </View>
      <View>
        <Button
          label="Novo"
          icon={<MaterialIcons name="add" size={22} color="white" />}
          onPress={() => navigation.navigate('NewQuote' as never)}
        />
      </View>
    </View>
  );
}
