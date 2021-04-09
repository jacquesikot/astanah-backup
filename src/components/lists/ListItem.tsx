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
  chevron?: boolean;
  icon?: ReactNode;
  index?: number;
  height?: number;
  borderBottom?: boolean;
  textColor?: 'red' | 'primary';
}

const ListItem = ({
  label,
  chevron,
  index,
  icon,
  height,
  borderBottom,
  textColor,
}: ListItemProps) => {
  const heightValue = height ? height : 56;
  const borderWidth = borderBottom ? 1 : 0;
  const borderColor = borderBottom ? theme.colors.light : theme.colors.white;
  const textColorValue = textColor ? textColor : 'primary';

  return (
    <Box
      style={[
        styles.container,
        {
          height: heightValue,
          borderBottomWidth: borderWidth,
          borderBottomColor: borderColor,
        },
      ]}
    >
      {returnSvg(index!)}
      {icon ? icon : null}
      <Text variant="b3B" color={textColorValue} marginLeft="m">
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
