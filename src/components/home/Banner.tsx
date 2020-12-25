import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  ImageRequireSource,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StringLocale } from 'yup';

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
    borderRadius: theme.spacing.s,
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
}

const Banner = ({
  image,
  onPress,
  margin,
  width,
  height,
  src,
}: BannerProps) => {
  const marginNo = margin ? CARD_MARGIN : 0;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        style={[
          styles.container,
          {
            marginRight: marginNo,
            width: width ? width : CARD_WIDTH,
            height: height ? height : 206,
          },
        ]}
      >
        {src ? (
          <Image source={src} resizeMode="cover" style={styles.image} />
        ) : (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Banner;
