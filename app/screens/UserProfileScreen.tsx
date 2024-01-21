import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {logout} from '../slices/authSlice';
import {StackScreenNavigationProp} from '../Navigation';
import {Colors, Sizes, Themes} from '../constants';
import {Header} from 'react-native/Libraries/NewAppScreen';

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackScreenNavigationProp<'Profile'>>();

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Profile screen</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
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
  logoutButton: {
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: Sizes.borderRadius,
  },
  logoutButtonText: {
    color: Themes.light.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
