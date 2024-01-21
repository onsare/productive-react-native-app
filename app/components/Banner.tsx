import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {StackScreenNavigationProp} from '../Navigation';

const Banner = ({data}) => {
  const navigation = useNavigation<StackScreenNavigationProp<'Details'>>();

  const handlePress = () => {
    navigation.navigate('Details');
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((card, index: number) => (
        <TouchableOpacity key={index} onPress={handlePress}>
          <View style={styles.card}>
            {card.image && (
              <Image source={card.image} style={styles.bannerImage} />
            )}
            <Text>{card.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  bannerImage: {width: 300, height: 160, borderRadius: 10},
  text: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Banner;
