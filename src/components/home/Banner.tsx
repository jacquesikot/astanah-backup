import React from 'react';
import { StyleSheet, Dimensions, Image as RNImage } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native-expo-image-cache';

import { Box, Text } from '../../components';
import theme from '../Theme';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width - theme.spacing.xl * 2;
export const CARD_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

interface BannerProps {
  image?: string;
  onPress?: () => void;
  margin?: boolean;
  width?: number;
  height?: number;
  src?: any;
  noBorderRad?: boolean;
}

const Banner = ({
  image,
  onPress,
  margin,
  width,
  height,
  src,
  noBorderRad,
}: BannerProps) => {
  const marginNo = margin ? CARD_MARGIN : 0;
  const borderRadValue = noBorderRad ? 0 : 5;

  const uri = image || '';

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        style={[
          styles.container,
          {
            marginRight: marginNo,
            width: width ? width : CARD_WIDTH,
            height: height ? height : 206,
            borderRadius: borderRadValue,
          },
        ]}
      >
        {src ? (
          <RNImage source={src} resizeMode="cover" style={styles.image} />
        ) : (
          <Image {...{ uri }} tint="light" style={styles.image} />
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Banner;
