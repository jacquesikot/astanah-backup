import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import { Box, Text, theme } from '../../components';
import { capitalize } from '../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 110,
    width,
    padding: theme.spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light,
    backgroundColor: theme.colors.white,
  },
});

interface ProfileHeadProps {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileHead = ({ firstName, lastName, email }: ProfileHeadProps) => {
  return (
    <Box style={styles.container}>
      <Image
        source={require('../../../assets/profile.png')}
        style={{ width: 72, height: 72 }}
      />
      <Box>
        <Text variant="h4" color="primary" marginTop="l" marginLeft="l">
          {capitalize(firstName) + ' ' + capitalize(lastName)}
        </Text>
        <Text variant="b3" color="grey" marginTop="s" marginLeft="l">
          {email}
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileHead;
