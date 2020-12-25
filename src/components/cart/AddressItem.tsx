import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { DeliveryAddress } from '../../../types';
import { theme, Box, Text, Button } from '../../components';

const { width } = Dimensions.get('window');
const COMPONENT_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: COMPONENT_WIDTH,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface AddressItemProps {
  address: DeliveryAddress;
  trash?: () => void;
  edit: () => void;
}

const AddressItem = ({ address, trash, edit }: AddressItemProps) => {
  const { name, addressDetail, phone } = address;
  const borderColor = theme.colors.light;
  return (
    <Box style={[styles.container, { borderColor: borderColor }]}>
      <Text variant="h4" color="primary" style={{ marginBottom: 10 }}>
        {name}
      </Text>
      <Text variant="b2" color="grey" style={{ marginBottom: 10 }}>
        {addressDetail}
      </Text>
      <Text variant="b2" color="grey" style={{ marginBottom: 10 }}>
        {phone}
      </Text>
      <Box style={styles.subView}>
        <Button label="Edit" onPress={() => edit} width={77} />
        <Box style={{ marginLeft: 35 }} />
        {trash && <Icon name="trash" color={theme.colors.grey} size={24} />}
      </Box>
    </Box>
  );
};

export default AddressItem;
