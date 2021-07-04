import * as React from 'react';
import { Image, FlatList } from 'react-native';

import styles from './styles';
import { Text, View } from '../../components/Themed';
import HomeCategory from '../../components/HomeCategory';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* list of categories */}      
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item}></HomeCategory>}        
      />
    </View>
  );
}

export default HomeScreen;
