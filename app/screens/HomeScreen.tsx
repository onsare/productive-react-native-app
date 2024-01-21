import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  setHomeScreenData,
  selectHomeScreenData,
} from '../slices/homeScreenSlice';
import Carousel from '../components/Carousel';
import Banner from '../components/Banner';
import DataComponent from '../components/Data';
import {ScrollView} from 'react-native-gesture-handler';
import {getHomepageData} from '../api/homeApi';

const HomePageScreen = () => {
  const dispatch = useDispatch();

  const homepageData = useSelector(selectHomeScreenData);

  useEffect(() => {
    //Simulatet Mock API call to fetch homepage data
    const fetchData = async () => {
      // Replace with actual API calls
      getHomepageData()
        .then(data => {
          dispatch(setHomeScreenData(data.components));
        })
        .catch(err => {
          console.log('something went wrong', err);
        });
    };

    fetchData();
  }, [dispatch]);

  return (
    <ScrollView>
      <View>
        {homepageData?.map((component, index: number) => (
          <View key={index} style={styles.section}>
            {renderComponent(component)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const renderComponent = item => {
  switch (item.type) {
    case 'carousel':
      return <Carousel key={item.type} data={item.data} />;
    case 'banner':
      return <Banner key={item.type} data={item.data} />;
    case 'data':
      return <DataComponent key={item.type} data={item.data} />;

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
});

export default HomePageScreen;
