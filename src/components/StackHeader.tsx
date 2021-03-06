import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import theme, { Box, Text } from './Theme';
import { SearchIcon } from '../Svg';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light,
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
});

interface StackHeaderProps {
  title: string;
  search?: () => void;
  back?: () => void;
  plus?: () => void;
  filter?: () => void;
}

const StackHeader = ({
  title,
  search,
  back,
  plus,
  filter,
}: StackHeaderProps) => {
  return (
    <Box style={styles.container}>
      {back && (
        <TouchableOpacity onPress={back}>
          <Icon size={24} color={theme.colors.grey} name="chevron-left" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={back}>
        <Text
          variant="h4"
          color="primary"
          marginLeft="m"
          style={{ width: width * 0.8 }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </TouchableOpacity>
      {search ? (
        <TouchableOpacity onPress={search}>
          <SearchIcon color={theme.colors.grey} />
        </TouchableOpacity>
      ) : plus ? (
        <TouchableOpacity onPress={plus}>
          <Icon name="plus" color={theme.colors.primary} size={24} />
        </TouchableOpacity>
      ) : filter ? (
        <TouchableOpacity onPress={filter}>
          <Icon name="filter" color={theme.colors.primary} sizze={55} />
        </TouchableOpacity>
      ) : null}
    </Box>
  );
};

export default StackHeader;
