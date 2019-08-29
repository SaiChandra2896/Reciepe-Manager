import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMealsScreen = props => {
  //to extract the category id which is passed from categories screen
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>the CategoriesMealsScreen </Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='go to mealdetail'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }}
      />
      <Button
        title='Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

//navigation options can also be a function to output dynamic data
CategoriesMealsScreen.navigationOptions = navigationData => {
  //console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesMealsScreen;
