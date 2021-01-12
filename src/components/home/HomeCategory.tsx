import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text, theme } from '..';
import { returnSvg, capitalize } from '../../utils';

export const CIRCLE_WIDTH = 65;
export const CIRCLE_MARGIN = 10;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 109,
  },
  circle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.light,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  text: {
    width: CIRCLE_WIDTH,
    textAlign: 'center',
  },
});

interface HomeCategoryProps {
  category: any;
  margin?: number;
  index?: number;
}

const HomeCategory = ({ category, margin, index }: HomeCategoryProps) => {
  const marginValue = margin ? margin : CIRCLE_MARGIN;
  const { category_name } = category;
  return (
    <Box style={[styles.container, { marginRight: marginValue }]}>
      <Box style={styles.circle}>{returnSvg(index ? index : 0)}</Box>
      <Text variant="b4" color="grey" style={styles.text}>
        {capitalize(category_name)}
      </Text>
    </Box>
  );
};

export default HomeCategory;
