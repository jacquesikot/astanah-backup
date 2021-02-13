import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { HeartIcon, HeartIconFill } from '../Svg';

import { Box } from './Theme';

const styles = StyleSheet.create({
  container: {},
});

interface Props {
  touched: boolean | undefined;
  loading?: boolean;
  newRender?: boolean;
}

const Likebutton = ({ touched, loading, newRender }: Props) => {
  return loading ? (
    <ActivityIndicator />
  ) : newRender ? (
    <Box style={styles.container}>
      <HeartIcon />
    </Box>
  ) : (
    <Box style={styles.container}>
      {touched ? <HeartIconFill /> : <HeartIcon />}
    </Box>
  );
};

export default Likebutton;
