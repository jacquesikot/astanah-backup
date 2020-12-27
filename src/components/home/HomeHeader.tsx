import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, theme } from '..';
import SearchInput from '../SearchInput';
import { HeartIcon, AlarmIcon } from '../../Svg';

const { width } = Dimensions.get('window');
export const HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    width,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light,
    alignItems: 'center',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  dot: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 5,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.red,
    position: 'absolute',
    left: 65,
    bottom: 15,
    zIndex: 1,
  },
});

interface HomeHeaderProps {
  favorite: () => void;
  notification: () => void;
  onFocus?: any;
}

const HomeHeader = ({ favorite, notification, onFocus }: HomeHeaderProps) => {
  return (
    <Box style={styles.container}>
      <SearchInput placeholder="Search Products" onFocus={onFocus} />
      <Box style={styles.icons}>
        <TouchableOpacity onPress={favorite}>
          <HeartIcon />
        </TouchableOpacity>
        <Box style={{ flex: 1 }} />
        <Box style={styles.dot} />
        <TouchableOpacity onPress={notification}>
          <AlarmIcon />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default HomeHeader;
