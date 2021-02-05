import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

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
  borderColor?: 'light' | 'primary';
}

const AddressItem = ({
  billing,
  trash,
  edit,
  borderColor,
}: AddressItemProps) => {
  const {
    first_name,
    last_name,
    address,
    city,
    state,
    country,
    phone,
  } = billing;
  const borderColorValue = borderColor ? borderColor : 'light';
  return (
    <Box
      style={[
        styles.container,
        { borderColor: theme.colors[borderColorValue] },
      ]}
    >
      <Text variant="h3" color="primary" style={{ marginBottom: 10 }}>
        {capitalize(first_name) + ' ' + capitalize(last_name)}
      </Text>
      <Text
        numberOfLines={2}
        variant="b1"
        color="dark"
        style={{ marginBottom: 10 }}
      >
        {`${capitalize(address)}, ${capitalize(city)}, ${capitalize(
          state
        )}, ${capitalize(country)}`}
      </Text>
      <Text variant="b1" color="dark" style={{ marginBottom: 10 }}>
        {phone}
      </Text>
      <Box style={styles.subView}>
        {edit && (
          <Button label="Edit" onPress={edit} width={77} height={45} noShadow />
        )}
        <Box style={{ marginLeft: 25 }} />
        {trash && (
          <Button
            label="Delete"
            color={theme.colors.red}
            onPress={trash}
            width={77}
            height={45}
            noShadow
          />
        )}
      </Box>
    </Box>
  );
};

export default AddressItem;
