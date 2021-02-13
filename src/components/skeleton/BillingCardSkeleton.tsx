import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

import { theme, Box, Text, Button } from '../../components';
import { capitalize } from '../../utils';

const { width } = Dimensions.get('window');
const COMPONENT_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: COMPONENT_WIDTH,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    height: 210,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface BillingCardSkeletonProps {
  width?: number;
  height?: number;
  trash: boolean;
}

const BillingCardSkeleton = ({
  width,
  height,
  trash,
}: BillingCardSkeletonProps) => {
  const widthValue = width ? width : COMPONENT_WIDTH;
  const heightValue = height ? height : 210;
  const [animation] = useState(new Animated.Value(0));
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
  const borderColor = theme.colors.light;
  return (
    <Box
      style={[
        styles.container,
        { borderColor: borderColor, width: widthValue, height: heightValue },
      ]}
    >
      <Animated.View
        style={{
          width: '90%',
          height: 30,
          backgroundColor: bgColor,
          marginBottom: 10,
        }}
      />
      <Animated.View
        style={{
          width: '80%',
          height: 22,
          backgroundColor: bgColor,
          marginBottom: 10,
        }}
      />
      <Animated.View
        style={{
          width: '70%',
          height: 22,
          backgroundColor: bgColor,
          marginBottom: 20,
        }}
      />
      <Box style={styles.subView}>
        <Animated.View
          style={{
            width: 77,
            height: 45,
            backgroundColor: bgColor,
            borderRadius: 5,
          }}
        />
        {trash && (
          <Animated.View
            style={{
              width: 77,
              height: 45,
              backgroundColor: bgColor,
              marginLeft: 25,
              borderRadius: 5,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default BillingCardSkeleton;
