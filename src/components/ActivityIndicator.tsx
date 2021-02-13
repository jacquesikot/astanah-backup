import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { theme } from '../components';

interface ActivityIndicatorProps {
  visible: boolean;
  opacity?: number;
}

function ActivityIndicator({
  visible = false,
  opacity,
}: ActivityIndicatorProps) {
  const opacityValue = opacity ? opacity : 1;

  if (!visible) return null;

  return (
    <>
      <View style={[styles.overlay, { opacity: opacityValue }]}>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/animations/astanah_loading_animation.json')}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
});

export default ActivityIndicator;
