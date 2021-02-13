import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import { Box, Text, theme } from '../components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.red,
    height: 22,
    marginTop: Constants.statusBarHeight,
    width: '100%',
  },
});

interface OfflineNoticeProps {}
const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <Box style={styles.container}>
        <Text variant="b3B" color="white">
          No Internet Connection...
        </Text>
      </Box>
    );
  return null;
};

export default OfflineNotice;
