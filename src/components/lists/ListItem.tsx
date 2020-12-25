import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text } from '../Theme';
import { theme } from '..';
import { returnSvg, capitalize } from '../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 40,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
  },
});

interface ListItemProps {
  label: string;
  image?: any;
  chevron?: boolean;
  icon?: ReactNode;
  index?: number;
}

const ListItem = ({ label, image, chevron, index, icon }: ListItemProps) => {
  return (
    <Box style={styles.container}>
      {index ? returnSvg(index) : null}
      {icon ? icon : null}
      <Text variant="b3B" color="primary" marginLeft="m">
        {capitalize(label)}
      </Text>
      <Box style={{ flex: 1 }} />
      {chevron && (
        <Icon name="chevron-right" size={18} color={theme.colors.primary} />
      )}
    </Box>
  );
};

export default ListItem;
