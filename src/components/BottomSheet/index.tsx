import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '@/components/Header';

import { styles } from './styles';

const SHEET_OFFSET = 500;
const OPEN_DURATION = 250;
const CLOSE_DURATION = 200;

type BottomSheetProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: (close: () => void) => React.ReactNode;
};

export default function BottomSheet({
  title,
  onClose,
  children,
  footer,
}: BottomSheetProps) {
  const translateY = useRef(new Animated.Value(SHEET_OFFSET)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: OPEN_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: OPEN_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [overlayOpacity, translateY]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: SHEET_OFFSET,
        duration: CLOSE_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: CLOSE_DURATION,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) onClose();
    });
  };

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
        <Pressable style={styles.overlayPressable} onPress={handleClose} />
      </Animated.View>
      <View style={styles.sheetWrapper} pointerEvents="box-none">
        <Animated.View
          style={[styles.container, { transform: [{ translateY }] }]}
        >
          <Header>
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={handleClose}>
                <MaterialIcons name="close" size={20} color="#4A4A4A" />
              </TouchableOpacity>
            </View>
          </Header>
          <View style={styles.content}>{children}</View>
          {footer && <View style={styles.footer}>{footer(handleClose)}</View>}
        </Animated.View>
      </View>
    </>
  );
}
