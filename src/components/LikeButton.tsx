import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HeartIcon, HeartIconFill } from '../Svg';

import { Box } from './Theme';

const styles = StyleSheet.create({
  container: {},
});

interface Props {
  touched: boolean;
}

const Likebutton = ({ touched }: Props) => {
  return (
    <Box style={styles.container}>
      {touched ? <HeartIconFill /> : <HeartIcon />}
    </Box>
  );
};

export default Likebutton;
