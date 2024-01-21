/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Sizes} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {StackScreenNavigationProp} from '../Navigation';

const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

interface Item {
  title: string;
  url: string;
  description: string;
}

const Carousel = ({data}) => {
  const navigation = useNavigation<StackScreenNavigationProp<'Details'>>();

  const handlePress = () => {
    navigation.navigate('Details');
  };
  let flatListRef = useRef<FlatList<Item> | null>;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index});
  };
  const renderItems: React.FC<{item: Item}> = ({item}) => {
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={1}>
        <Image source={{uri: item.url}} style={styles.image} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>{item.title}</Text>
          <Text style={styles.footerText}>See Portfolio</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={ref => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dotView}>
        {data.map(({}, index: number) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              {
                backgroundColor:
                  index === currentIndex ? Colors.primary : 'grey',
              },
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: Sizes.deviceWidth,
    height: 200,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  carousel: {},
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default Carousel;
