import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { Box, Text } from '../Theme';
import { TrashIcon } from '../../Svg';
import { numberWithCommas } from '../../utils';
import { ProductOrder } from '../../../types';
import { theme } from '..';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - theme.spacing.xl * 2,
    flexDirection: 'row',
    height: 104,
    borderWidth: 1,
    borderColor: theme.colors.light,
    borderRadius: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  trash: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.light,
  },
});

interface CartItemProps {
  product: ProductOrder;
  margin?: number;
  deleteItem: () => void;
}

const CartItem = ({ product, margin, deleteItem }: CartItemProps) => {
  const {
    title,
    meta_thumbnail_id,
    regular_price,
    sale_price,
    count,
  } = product;
  const uri = meta_thumbnail_id;
  const regPrice = Number(regular_price).toFixed(2);
  const salePrice = Number(sale_price).toFixed(2);
  const finalPrice = salePrice ? salePrice : regPrice;
  const marginNo = margin ? margin : 0;
  return (
    <Box style={[styles.container, { marginTop: marginNo }]}>
      <Box style={{ marginRight: 10 }}>
        <Image {...{ uri }} tint="light" style={{ width: 72, height: 72 }} />
      </Box>
      <Box style={{ height: 72 }}>
        <Box
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            variant="h5"
            color="primary"
            style={{ width: 158, marginRight: 10 }}
            numberOfLines={2}
          >
            {title}
          </Text>
          <TouchableOpacity onPress={deleteItem} style={styles.trash}>
            <TrashIcon width={18} height={18} color={theme.colors.red} />
          </TouchableOpacity>
        </Box>
        <Box style={{ flex: 1 }} />
        <Box style={{ flexDirection: 'row' }}>
          <Text variant="h4" color="secondary">
            ZK{numberWithCommas(Number(finalPrice))} (X{count})
          </Text>
          <Box style={{ flex: 1 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
