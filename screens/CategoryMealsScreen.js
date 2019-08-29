import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>the CategoriesMealsScreen </Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesMealsScreen;
