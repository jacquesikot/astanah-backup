import React, { useState } from 'react';
import { StyleSheet, Modal, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text, theme, Button } from '../../components';
import { useAppContext } from '../../context/context';
import { ProductOrder } from '../../../types';

const { width, height } = Dimensions.get('window');

const OPERATOR_BOX = 70;
const ICON_SIZE = 36;
const BUTTON_WIDTH = width * 0.42;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  centredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
  },
  counter: {
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.xl,
  },
  counterCase: {
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
    marginTop: theme.spacing.xl * 1.4,
  },
});

interface QuantityModalProps {
  visible: boolean;
  closeModal: () => void;
  product: ProductOrder;
}
const QuantityModal = ({
  visible = false,
  closeModal,
  product,
}: QuantityModalProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { manageCart } = useAppContext();

  return (
    <Modal visible={visible} animationType="fade">
      <Box style={styles.container}>
        <Text color="dark" variant="h3">
          Select Quantity
        </Text>
        <Box style={styles.counterContainer}>
          <Box style={styles.counterCase}>
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
              noShadow
              label="Close"
              onPress={() => {
                manageCart('REMOVE_FROM_CART', product);
                closeModal();
                setQuantity(1);
              }}
              width={BUTTON_WIDTH}
              color={theme.colors.red}
            />
            <Box style={{ flex: 1 }} />
            <Button
              noShadow
              label="Done"
              width={BUTTON_WIDTH}
              onPress={() => {
                manageCart('ADD_TO_CART', product, quantity);
                closeModal();
              }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default QuantityModal;
