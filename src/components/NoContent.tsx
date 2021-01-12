import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import { Text, Box, StackHeader, Button } from '../components';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const { width } = Dimensions.get('window');

interface NoContentProps {
  title: string;
  back: () => void;
  onPress: () => void;
  buttonText: string;
  message: string;
}
const NoContent = ({
  title,
  back,
  onPress,
  buttonText,
  message,
}: NoContentProps) => {
  return (
    <Box style={styles.container}>
      <StackHeader title={title} back={back} />
      <Box
        style={{
          marginTop: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/empty_cart.png')}
          style={{ width: 287, height: 218.5 }}
        />
        <Text variant="b1" color="primary" marginTop="m" marginBottom="xl">
          {message}
        </Text>
        <Button
          noShadow
          label={buttonText}
          onPress={onPress}
          width={width * 0.6}
        />
      </Box>
    </Box>
  );
};

export default NoContent;
