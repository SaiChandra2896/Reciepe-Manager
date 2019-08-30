import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoriesMealsScreen = props => {
  const renderMealItem = itemdata => {
    return (
      <MealItem
        title={itemdata.item.title}
        onSelectMeal={() => {}}
        duration={itemdata.item.duration}
        complexity={itemdata.item.complexity}
        affordability={itemdata.item.affordability}
        image={itemdata.item.imageUrl}
      />
    );
  };
  //to extract the category id which is passed from categories screen
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
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
