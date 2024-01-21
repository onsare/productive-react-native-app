import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors, Sizes} from '../constants';
import {StackScreenNavigationProp} from '../Navigation';

const DataComponent = ({data}) => {
  const navigation = useNavigation<StackScreenNavigationProp<'Details'>>();

  const handlePress = () => {
    navigation.navigate('Details');
  };
  return (
    <ScrollView>
      {data.map((item, index: number) => (
        <View key={index} style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image source={item.image} style={styles.avatar} />
            <Text>{item.username}</Text>
          </View>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.excerpt}>{item.excerpt}</Text>
          <TouchableOpacity style={styles.viewButton} onPress={handlePress}>
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  avatarContainer: {
    padding: 10,
  },
  excerpt: {
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    width: Sizes.deviceWidth - 40,
    height: 150,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  viewButton: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    margin: 10,
    borderRadius: Sizes.borderRadius,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default DataComponent;
