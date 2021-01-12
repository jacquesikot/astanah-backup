import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Box, theme } from '../../components';
import { Alert } from '../../Svg';

interface ErrorMessageProps {
  error: string;
  visible: boolean;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const ErrorMessage = ({ error, visible }: ErrorMessageProps) => {
  if (!visible || !error) return null;

  return (
    <Box style={styles.container}>
      <Alert color={theme.colors.red} width={20} />
      <Text variant="b2" color="red" marginLeft="s">
        {error}
      </Text>
    </Box>
  );
};

export default ErrorMessage;
