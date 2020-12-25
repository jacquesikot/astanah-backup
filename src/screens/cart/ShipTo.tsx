import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { AddressItem, Box, StackHeader, theme, Button } from '../../components';
import { addresses } from '../../data';
import { StackScreenProps } from '@react-navigation/stack';
import { CartNavParamList, DeliveryAddress } from '../../../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
});

interface ShipToProps {}

const ShipTo = ({
  navigation,
}: StackScreenProps<CartNavParamList, 'ShipTo'>) => {
  const [onTouch, setOnTouch] = useState<DeliveryAddress>(addresses[0]);
  return (
    <SafeAreaView style={styles.container}>
      <Box style={{ alignItems: 'center' }}>
        <StackHeader
          title="Ship To"
          plus={() => navigation.navigate('AddAddress')}
          back={() => navigation.goBack()}
        />
        <Box
          marginTop="s"
          marginBottom="m"
          style={{ height: '75%', paddingBottom: 10 }}
        >
          <FlatList
            showsVerticalScrollIndicator={true}
            data={addresses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback onPress={() => setOnTouch(item)}>
                <AddressItem
                  key={index}
                  address={item}
                  edit={() =>
                    navigation.navigate('EditAddress', { address: item })
                  }
                />
              </TouchableWithoutFeedback>
            )}
          />
        </Box>
        <Button
          label="Next"
          onPress={() => navigation.navigate('Payment', { address: onTouch })}
        />
      </Box>
    </SafeAreaView>
  );
};

export default ShipTo;
