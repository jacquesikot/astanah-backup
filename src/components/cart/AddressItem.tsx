import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { BillingInfo } from '../../../types';
import { theme, Box, Text, Button } from '../../components';
import { capitalize } from '../../utils';

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
  billing: BillingInfo;
  trash?: any;
  edit?: () => void;
}

const AddressItem = ({ billing, trash, edit }: AddressItemProps) => {
  const { first_name, last_name, address, phone } = billing;
  const borderColor = theme.colors.light;
  return (
    <Box style={[styles.container, { borderColor: borderColor }]}>
      <Text variant="h4" color="primary" style={{ marginBottom: 10 }}>
        {capitalize(first_name) + ' ' + capitalize(last_name)}
      </Text>
      <Text variant="b2" color="dark" style={{ marginBottom: 10 }}>
        {address}
      </Text>
      <Text variant="b2" color="dark" style={{ marginBottom: 10 }}>
        {phone}
      </Text>
      <Box style={styles.subView}>
        <Button label="Edit" onPress={() => edit} width={77} height={45} />
        <Box style={{ marginLeft: 25 }} />
        {trash && (
          <Button
            label="Delete"
            color={theme.colors.red}
            onPress={() => edit}
            width={77}
            height={45}
          />
        )}
      </Box>
    </Box>
  );
};

export default AddressItem;
