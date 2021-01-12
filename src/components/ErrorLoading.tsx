import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import { Box, Text, Button } from '../components';
import theme from './Theme';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: width - theme.spacing.xl * 2,
  },
});

interface ErrorLoadingProps {
  message?: string;
  buttonText?: string;
  reload: any;
}
const ErrorLoading = ({ message, reload, buttonText }: ErrorLoadingProps) => {
  return (
    <Box style={styles.container}>
      <Image
        source={require('../../assets/error_loading.png')}
        style={{ width: 287, height: 218.5 }}
      />
      <Text
        variant="b2"
        color="primary"
        marginTop="m"
        style={styles.errorMessage}
      >
        {message
          ? message
          : 'Something went wrong. Check your connection and try again'}
      </Text>
      <Box style={{ marginTop: 20 }}>
        <Button
          label={buttonText ? buttonText : 'Try Again'}
          noShadow
          onPress={reload}
          width={200}
          height={57}
        />
      </Box>
    </Box>
  );
};

export default ErrorLoading;

// TODO

// change error text to: Something went wrong. Check your connection and try again
