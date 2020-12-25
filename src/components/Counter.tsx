import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, Text, theme, Button } from '../components';
import { ProductOrder } from '../../types';
import { useAppContext } from '../context/context';

const { width } = Dimensions.get('window');

const OPERATOR_BOX = 70;
const ICON_SIZE = 36;
const BUTTON_WIDTH = width * 0.42;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    flexDirection: 'row',
  },
  minusBox: {
    width: OPERATOR_BOX,
    height: OPERATOR_BOX,
    borderRadius: theme.borderRadii.s,
    backgroundColor: theme.colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueBox: {
    width: OPERATOR_BOX,
    height: OPERATOR_BOX,
    borderRadius: theme.borderRadii.s,
    borderWidth: 1,
    borderColor: theme.colors.dark,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.l,
    marginRight: theme.spacing.l,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: width - theme.spacing.xl * 2,
    marginTop: theme.spacing.xl,
  },
});

interface CounterProps {
  product: ProductOrder;
  closeModal: () => void;
}
const Counter = ({ product, closeModal }: CounterProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { manageCart } = useAppContext();
  return (
    <Box style={styles.container}>
      <Box style={styles.counter}>
        <TouchableOpacity
          onPress={() => {
            if (quantity === 1) return;
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            manageCart('DECREASE_COUNT', product);
          }}
        >
          <Box style={styles.minusBox}>
            <Icon name="minus" size={ICON_SIZE} color={theme.colors.dark} />
          </Box>
        </TouchableOpacity>
        <Box style={styles.valueBox}>
          <Text variant="h2" color="dark">
            {quantity.toString()}
          </Text>
        </Box>
        <TouchableOpacity
          onPress={() => {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            manageCart('INCREASE_COUNT', product);
          }}
        >
          <Box style={styles.minusBox}>
            <Icon name="plus" size={ICON_SIZE} color={theme.colors.dark} />
          </Box>
        </TouchableOpacity>
      </Box>
      <Box style={styles.buttonContainer}>
        <Button
          label="Close"
          onPress={closeModal}
          width={BUTTON_WIDTH}
          color={theme.colors.red}
        />
        <Box style={{ flex: 1 }} />
        <Button label="Done" width={BUTTON_WIDTH} onPress={closeModal} />
      </Box>
    </Box>
  );
};

export default Counter;
