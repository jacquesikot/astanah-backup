import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import theme, { Box, Text } from '../Theme';
import { numberWithCommas, discountPrecentage } from '../../utils';
import Ratings from '../Ratings';
import { ProductOrder } from '../../../types';

const { width: screenWidth } = Dimensions.get('window');

const CARD_PADDING = 16;
const CARD_WIDTH = 165;
const CARD_HEIGHT = 282;
export const CARD_MARGIN = (screenWidth - 40 - CARD_WIDTH * 2) / 2;
const IMAGE_SIZE = CARD_WIDTH - CARD_PADDING * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.light,
    alignItems: 'center',
    paddingTop: 16,
  },
  trash: {
    position: 'absolute',
    left: '73%',
    top: '83%',
  },
});

interface ProductProps {
  product: ProductOrder;
  width?: number;
  height?: number;
  noRating?: boolean;
  marginBottom?: number;
  marginRight?: number;
  trash?: () => void;
}

const returnFromScreenSize = (screenSize: number) => {
  if (screenSize < 414) return 230;
  return 250;
};

const ProductCard = ({
  product,
  width,
  height,
  noRating,
  marginBottom,
  marginRight,
  trash,
}: ProductProps) => {
  const { title, sale_price, regular_price, meta_thumbnail_id } = product;
  const finalPrice = sale_price
    ? Number(sale_price).toFixed(2)
    : Number(regular_price).toFixed(2);
  const finalHeightValue = returnFromScreenSize(screenWidth);
  const widthNo = width ? width : CARD_WIDTH;
  const heightNo = height ? height : finalHeightValue;
  const imageSize = width ? width - CARD_PADDING * 2 : IMAGE_SIZE;
  const ratingValue = 1;
  const marginBottomValue = marginBottom ? marginBottom : CARD_MARGIN;
  const marginRightValue = marginRight ? marginRight : CARD_MARGIN;
  const uri = meta_thumbnail_id;
  const marginVertical = screenWidth < 414 ? 20 : 0;
  const preview = {
    uri: `https://via.placeholder.com/${imageSize}/ebf0ff`,
  };
  return (
    <Box
      style={[
        styles.container,
        {
          width: widthNo,
          height: heightNo,
          marginRight: marginRightValue,
          marginBottom: marginBottomValue,
          marginVertical: marginVertical,
        },
      ]}
    >
      <Image
        {...{ uri, preview }}
        tint="light"
        transitionDuration={300}
        style={{ width: imageSize, height: imageSize, borderRadius: 5 }}
      />
      {trash && (
        <Box style={styles.trash}>
          <TouchableOpacity onPress={trash}>
            <Icon name="trash" color={theme.colors.grey} size={24} />
          </TouchableOpacity>
        </Box>
      )}
      <Text
        variant="h6"
        color="primary"
        numberOfLines={2}
        style={{ width: imageSize, marginTop: 10 }}
      >
        {title}
      </Text>

      <Box
        style={{
          width: imageSize,
          flexDirection: 'row',
        }}
      >
        {noRating ? null : <Ratings rating={ratingValue} />}
        <Box style={{ flex: 1 }} />
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          width: imageSize,
        }}
      >
        <Text variant="h5" color="secondary">
          {'ZK' + ' ' + numberWithCommas(Number(finalPrice))}
        </Text>
        <Box style={{ flex: 1 }} />
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          width: imageSize,
          marginTop: 2,
        }}
      >
        <Text
          color="grey"
          style={{
            textDecorationLine: 'line-through',
            marginRight: 5,
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 0.5,
          }}
        >
          {sale_price ? 'ZK' + ' ' + Number(regular_price).toFixed(2) : null}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 0.5,
          }}
          color="red"
        >
          {sale_price
            ? discountPrecentage(Number(regular_price), Number(sale_price)) +
              `%Off`
            : null}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
