import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Box, theme } from '..';

const CONTAINER_PADDING = 16;

const styles = StyleSheet.create({
  container: {
    padding: CONTAINER_PADDING,
    borderWidth: 1,
    borderColor: theme.colors.light,
    borderRadius: theme.borderRadii.s,
    marginVertical: 10,
  },
  image: {
    borderRadius: theme.borderRadii.s,
  },
  text: {
    marginTop: theme.spacing.m,
    height: 15,
  },
  smallerText: {
    marginTop: theme.spacing.s,
    height: 15,
  },
  tinyText: {
    marginTop: theme.spacing.s,
    height: 10,
  },
});

interface ProductSkeletonProps {
  width: number;
  height: number;
  marginRight?: number;
}

const ProductSkeleton = ({
  width,
  height,
  marginRight,
}: ProductSkeletonProps) => {
  const [animation] = useState(new Animated.Value(0));

  const marginRightValue = marginRight ? marginRight : 10;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  });

  const color = theme.colors.offWhite;
  const color2 = theme.colors.offWhite2;

  const bgColor = animation.interpolate({
    inputRange: [0, 0.25, 0.5, 1],
    outputRange: [color, color2, color2, color],
  });

  const IMAGE_SIZE = width - CONTAINER_PADDING * 2;

  return (
    <Box
      style={[
        styles.container,
        { width: width, height: height, marginRight: marginRightValue },
      ]}
    >
      <Animated.View
        style={[
          styles.image,
          { backgroundColor: bgColor, width: IMAGE_SIZE, height: IMAGE_SIZE },
        ]}
      />
      <Animated.View
        style={[styles.text, { backgroundColor: bgColor, width: IMAGE_SIZE }]}
      />
      <Animated.View
        style={[
          styles.smallerText,
          { backgroundColor: bgColor, width: IMAGE_SIZE * 0.8 },
        ]}
      />
    </Box>
  );
};
export default ProductSkeleton;
