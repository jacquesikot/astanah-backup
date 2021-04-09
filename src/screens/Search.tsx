import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Keyboard,
  Image,
} from 'react-native';
import {
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

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
import { LOWER_CARD_WIDTH, LOWER_CARD_HEIGHT } from '../screens/Home';
import { StackScreenProps } from '@react-navigation/stack';
import { ExploreNavParamList, Product } from '../../types';

const { width, height } = Dimensions.get('window');

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
    top: '50%',
  },
});

const Search = ({
  navigation,
}: StackScreenProps<ExploreNavParamList, 'Explore'>) => {
  const searchProductsApi = useApi(productsApi.searchProducts);
  const getProductsApi = useApi(productsApi.getProducts);

  const [data, setData] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [hideFlatlist, setHideFlatlist] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [serverError, setServerError] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [introLogo, setIntroLogo] = useState<boolean>(true);

  let searchData: any;
  let dataArray;
  let offset = 2000;

  const handleSearch = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      setError(false);
      const searchText = e.nativeEvent.text;
      console.log(searchText);
      const result = await productsApi.searchProducts(searchText);
      searchData = result.data;
      dataArray = [...searchData.slice(0, offset)];
      setData(dataArray);
      if (searchData.length < 1) {
        setHideFlatlist(false);
        setIntroLogo(false);
        setError(true);
        setLoading(false);
        return;
      }
      setError(false);
      setData(dataArray);
      setHideFlatlist(true);
      setLoading(false);
      setIntroLogo(false);
      return;
    } catch (error) {
      setServerError(true);
    }
  };

  const keyboardWillShow = () => {
    setTyping(true);
    setIntroLogo(false);
  };
  const keyboardWillHide = () => {
    if (data.length > 1) return;
    setIntroLogo(true);
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
        <Box>
          {loading ? (
            <Box style={styles.result}>
              <ProductFlatListSkeleton
                numColummns={2}
                horizontal={false}
                scrollIndicator={false}
                data={products}
                width={LOWER_CARD_WIDTH}
                height={LOWER_CARD_HEIGHT}
                marginRight={30}
              />
            </Box>
          ) : error ? (
            <Box>
              <NoContent
                noHeader
                message={
                  'No Products found matching your search, try a less specific search phrase'
                }
              />
            </Box>
          ) : searchProductsApi.error || serverError ? (
            <ErrorLoading message="An unexpected error occured" />
          ) : (
            <>
              <Box style={styles.searchIcon} visible={introLogo}>
                <Image
                  source={require('../../assets/search.png')}
                  style={{ width: width - 60, height: height * 0.3 }}
                />
                <Text variant="b1" color="grey" marginTop="xl">
                  Search for the products you love
                </Text>
              </Box>
              <Box style={styles.result} visible={hideFlatlist}>
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
                        noRating
                      />
                    </TouchableWithoutFeedback>
                  )}
                />
              </Box>
            </>
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
