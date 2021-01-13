import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Keyboard,
} from 'react-native';
import {
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import {
  Box,
  Text,
  SearchInput,
  theme,
  ProductCard,
  ProductFlatListSkeleton,
  ErrorLoading,
  NoContent,
} from '../components';
import productsApi from '../api/products';
import { useApi } from '../hooks';
import { products } from '../data';
import { LOWER_CARD_HEIGHT, LOWER_CARD_WIDTH } from '../screens/Home';
import { StackScreenProps } from '@react-navigation/stack';
import { ExploreNavParamList, Product } from '../../types';
import { SearchIcon } from '../Svg';

const { width } = Dimensions.get('window');

const SEARCH_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingTop: theme.spacing.xl,
  },
  searchContainer: {
    alignItems: 'center',
    height: 55,
    marginTop: theme.spacing.l,
  },
  result: {
    marginLeft: theme.spacing.xl,
    marginTop: theme.spacing.l,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '90%',
  },
});

const Search = ({
  navigation,
}: StackScreenProps<ExploreNavParamList, 'Explore'>) => {
  const searchProductsApi = useApi(productsApi.getProducts);
  const getProductsApi = useApi(productsApi.getProducts);

  const [data, setData] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);

  let searchText;

  const handleSearch = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      searchText = e.nativeEvent.text;
      const result = await searchProductsApi.request(searchText);
      if (searchProductsApi.data.length < 1) {
        setError(true);
        setLoading(false);
        return;
      }
      setError(false);
      setData(result.data);
      setLoading(false);
      return;
    } catch (error) {
      setServerError(true);
    }
  };

  const keyboardWillShow = () => setTyping(true);
  const keyboardWillHide = () => {
    if (data.length > 1) return;
    return setTyping(false);
  };

  useEffect(() => {
    getProductsApi.request();
    setTyping(false);

    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <Box style={styles.searchContainer}>
          <SearchInput
            placeholder="Search products.."
            width={SEARCH_WIDTH}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
        </Box>
        <Box style={styles.result}>
          {loading ? (
            <ProductFlatListSkeleton
              numColummns={2}
              horizontal={false}
              scrollIndicator={false}
              data={products}
              width={LOWER_CARD_WIDTH}
              height={LOWER_CARD_HEIGHT}
              marginRight={30}
            />
          ) : error ? (
            <NoContent
              noHeader
              message={'No Products found matching your search'}
            />
          ) : searchProductsApi.error || serverError ? (
            <ErrorLoading message="An unexpected error occured" />
          ) : (
            <>
              <Box
                style={styles.searchIcon}
                visible={data.length > 1 ? false : !typing}
              >
                <Icon name="search" size={150} color={theme.colors.primary} />
                <Text variant="b1" color="grey">
                  Search for the products you love
                </Text>
              </Box>
              <FlatList
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                data={data.length > 1 ? data : []}
                keyExtractor={(item: Product) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('ProductDetails', { product: item })
                    }
                  >
                    <ProductCard
                      product={item}
                      width={LOWER_CARD_WIDTH}
                      height={LOWER_CARD_HEIGHT}
                      marginRight={30}
                    />
                  </TouchableWithoutFeedback>
                )}
              />
            </>
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
