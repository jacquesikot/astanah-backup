import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { HomeNavParamList, Product } from '../../types';
import {
  Banner,
  Box,
  StackHeader,
  theme,
  ProductCard,
  ProductPageSkeleton,
} from '../components';
import { useApi } from '../hooks';
import productsApi from '../api/products';

const { width } = Dimensions.get('window');

const CARD_SPACING = 30;
const CARD_HEIGHT = 240;
const CARD_WIDTH = (width - CARD_SPACING - theme.spacing.xl * 2) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: theme.spacing.xl,
    marginTop: 20,
    marginBottom: 80,
  },
  productContainer: {
    marginTop: 20,
    marginLeft: theme.spacing.xl,
    paddingBottom: 80,
  },
});

interface SaleProps {
  product: Product;
}

const Sale = ({ navigation }: StackScreenProps<HomeNavParamList>) => {
  const getProductsApi = useApi(productsApi.getProducts);

  useEffect(() => {
    getProductsApi.request();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {getProductsApi.loading ? (
        <ProductPageSkeleton
          header="Sales"
          banner={require('../../assets/banner2.jpeg')}
        />
      ) : (
        <Box>
          <StackHeader
            title="Sales"
            back={() => navigation.goBack()}
            filter={() => true}
          />
          <ScrollView
            scrollEventThrottle={16}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <Box style={{ alignItems: 'center', marginTop: 20 }}>
              <Banner
                src={require('../../assets/banner2.jpeg')}
                height={180}
                margin={false}
              />
            </Box>
            <Box style={styles.productContainer}>
              <FlatList
                numColumns={2}
                data={getProductsApi.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('ProductDetail', { product: item })
                    }
                  >
                    <ProductCard
                      product={item}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      marginRight={30}
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </Box>
          </ScrollView>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default Sale;
