import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import theme, { Box, Text } from './Theme';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.primary,
    shadowRadius: theme.spacing.s,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    elevation: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ButtonProps {
  label: string;
  onPress: () => void;
  width?: number;
  height?: number;
  noShadow?: boolean;
  noBorderRad?: boolean;
  color?: string;
}

const Button = ({
  label,
  onPress,
  width,
  height,
  noShadow,
  noBorderRad,
  color,
}: ButtonProps) => {
  const widthNo = width ? width : BUTTON_WIDTH;
  const heightNo = height ? height : 57;
  const shadowValue = noShadow ? null : styles.shadow;
  const noBorderRadValue = noBorderRad ? 0 : 5;
  const bgColor = color ? color : theme.colors.primary;
  return (
    <Box style={shadowValue}>
      <RectButton
        style={[
          styles.container,
          {
            width: widthNo,
            height: heightNo,
            borderRadius: noBorderRadValue,
            backgroundColor: bgColor,
          },
        ]}
        onPress={onPress}
      >
        <Text variant="button" color="white">
          {label}
        </Text>
      </RectButton>
    </Box>
  );
};

export default Button;
