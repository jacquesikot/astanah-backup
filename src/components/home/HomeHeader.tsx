import React from 'react';
import { Dimensions, StyleSheet, TextInputProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, theme } from '..';
import { HeartIcon, AlarmIcon } from '../../Svg';

const { width } = Dimensions.get('window');
export const HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    width,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    alignItems: 'center',
    position: 'absolute',
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.light,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface HomeHeaderProps extends TextInputProps {
  favorite?: () => void;
  notification?: () => void;
}

const HomeHeader = ({ favorite, notification }: HomeHeaderProps) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.icons}>
        <TouchableOpacity onPress={favorite}>
          <Box style={styles.icon}>
            <HeartIcon width={28} height={26} color={theme.colors.primary} />
          </Box>
        </TouchableOpacity>
        <Box style={{ flex: 1 }} />
        <TouchableOpacity onPress={notification}>
          <Box style={styles.icon}>
            <AlarmIcon width={28} height={26} color={theme.colors.primary} />
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default HomeHeader;
