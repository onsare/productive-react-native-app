// DetailsScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenNavigationProp} from '../Navigation';
import {Colors, Sizes, Themes} from '../constants';

const DetailsScreen = () => {
  const navigation = useNavigation<StackScreenNavigationProp<'Details'>>();

  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text>Another Part of the app</Text>

      <TouchableOpacity style={styles.Button} onPress={handlePress}>
        <Text style={styles.ButtonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: Sizes.borderRadius,
  },
  ButtonText: {
    color: Themes.light.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
