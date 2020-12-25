import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Box, theme } from '..';

const CIRCLE_WIDTH = 70;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginVertical: 10,
  },
  circle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: CIRCLE_WIDTH / 2,
  },
  text: {
    marginTop: theme.spacing.s,
    width: CIRCLE_WIDTH * 0.8,
    height: 5,
  },
  smallerText: {
    marginTop: theme.spacing.s,
    width: CIRCLE_WIDTH * 0.5,
    height: 5,
  },
});

interface CategoriesSkeletonProps {}

const CategoriesSkeleton = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

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

  return (
    <Box style={styles.container}>
      <Animated.View style={[styles.circle, { backgroundColor: bgColor }]} />
      <Animated.View style={[styles.text, { backgroundColor: bgColor }]} />
      <Animated.View
        style={[styles.smallerText, { backgroundColor: bgColor }]}
      />
    </Box>
  );
};
export default CategoriesSkeleton;
