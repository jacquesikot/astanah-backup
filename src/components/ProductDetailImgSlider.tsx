import React, { useRef } from 'react';
import { StyleSheet, Dimensions, Animated } from 'react-native';

import { Box, Text, theme } from '../components';
import Banner from './home/Banner';

const { width, height } = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.53;

const styles = StyleSheet.create({
  container: {
    height: SLIDE_HEIGHT,
    width,
    position: 'relative',
  },
  pagination: {
    position: 'absolute',
    top: '105%',
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 3,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
});

interface ProductDetailImgSliderProps {
  banners: any;
}

const ProductDetailImgSlider = ({ banners }: ProductDetailImgSliderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Box style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
      >
        {banners.map((img: string, index: any) => {
          return (
            <Banner
              key={index}
              image={img}
              width={width}
              height={SLIDE_HEIGHT}
              noBorderRad
            />
          );
        })}
      </Animated.ScrollView>
      <Box style={styles.pagination}>
        {banners.map((_: any, index: any) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={index} style={{ ...styles.dot, opacity }} />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductDetailImgSlider;
