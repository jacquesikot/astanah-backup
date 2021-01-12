import React from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, theme, Text, Button } from '../../components';
import { capitalize, spaceString } from '../../utils';
import { CustomerCardDetailsProp } from '../../../types';
import { TrashIcon } from '../../Svg';

const { width, height: wHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - theme.spacing.xl * 2,
    height: 200,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.offWhite,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    opacity: 0.3,
    position: 'absolute',
    bottom: 20,
  },
  circleContainer: {
    flexDirection: 'row',
  },
  trash: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.light,
  },
});

interface CustomerCardProps {
  customerCard: CustomerCardDetailsProp;
  borderColor: 'light' | 'primary';
  deleteItem?: any;
}

const CustomerCard = ({
  customerCard,
  borderColor,
  deleteItem,
}: CustomerCardProps) => {
  const { card_number, card_holder_name, card_exp_date } = customerCard;
  const borderColorValue = borderColor ? borderColor : 'light';
  return (
    <Animated.View
      style={[
        styles.container,
        { borderColor: theme.colors[borderColorValue] },
      ]}
    >
      <Box style={{ width: width - 80, paddingTop: theme.spacing.xl * 1.5 }}>
        <Box style={styles.circleContainer}>
          <Box style={styles.circle} />
          <Box style={[styles.circle, { left: 13 }]} />
        </Box>
        <Text variant="h1" letterSpacing={2} color="primary">
          {spaceString(card_number, 4).join(' ')}
        </Text>
        <Box style={{ flexDirection: 'row', marginTop: 20 }}>
          <Box>
            <Text variant="b2" color="grey">
              CARD HOLDER
            </Text>
            <Text variant="b2B" color="primary">
              {capitalize(card_holder_name)}
            </Text>
          </Box>
          <Box style={{ marginLeft: 30, marginRight: 50 }}>
            <Text variant="b2" color="grey">
              EXP DATE
            </Text>
            <Text variant="b2B" color="primary">
              {card_exp_date}
            </Text>
          </Box>
          {deleteItem && (
            <TouchableOpacity onPress={deleteItem} style={styles.trash}>
              <TrashIcon width={18} height={18} color={theme.colors.red} />
            </TouchableOpacity>
          )}
          <Box style={{ flex: 1 }} />
        </Box>
      </Box>
    </Animated.View>
  );
};

export default CustomerCard;
