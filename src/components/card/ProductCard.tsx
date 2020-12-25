import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import theme, { Box, Text } from '../Theme';
import { numberWithCommas, discountPrecentage } from '../../utils';
import Ratings from '../Ratings';
import { Product } from '../../../types';

const { width } = Dimensions.get('window');

const CARD_PADDING = 16;
const CARD_WIDTH = 165;
const CARD_HEIGHT = 282;
export const CARD_MARGIN = (width - 40 - CARD_WIDTH * 2) / 2;
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
  product: any;
  width?: number;
  height?: number;
  noRating?: boolean;
  marginBottom?: number;
  marginRight?: number;
  trash?: () => void;
}

const ProductCard = ({
  product,
  width,
  height,
  noRating,
  marginBottom,
  marginRight,
  trash,
}: ProductProps) => {
  const { Title, Sale_price, Regular_price, Meta_thumbnail_id } = product;
  const finalPrice = Sale_price
    ? Number(Sale_price).toFixed(2)
    : Number(Regular_price).toFixed(2);
  const widthNo = width ? width : CARD_WIDTH;
  const heightNo = height ? height : CARD_HEIGHT;
  const imageSize = width ? width - CARD_PADDING * 2 : IMAGE_SIZE;
  const ratingValue = 1;
  const marginBottomValue = marginBottom ? marginBottom : CARD_MARGIN;
  const marginRightValue = marginRight ? marginRight : CARD_MARGIN;
  return (
    <Box
      style={[
        styles.container,
        {
          width: widthNo,
          height: heightNo,
          marginRight: marginRightValue,
          marginBottom: marginBottomValue,
        },
      ]}
    >
      <Image
        source={{
          uri: Meta_thumbnail_id,
        }}
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
        {Title}
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
          marginTop: 7,
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
          {Sale_price ? 'ZK' + ' ' + Sale_price : null}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 0.5,
          }}
          color="red"
        >
          {Sale_price
            ? discountPrecentage(Number(Sale_price), Number(Regular_price)) +
              '% Off'
            : null}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
