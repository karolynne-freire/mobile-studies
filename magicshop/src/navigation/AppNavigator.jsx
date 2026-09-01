import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import ProductsScreen
  from '../screens/Products/ProductsScreen';

import ProductDetailsScreen
  from '../screens/ProductDetails/ProductDetailsScreen';

import FiltersScreen
  from '../screens/Filters/FiltersScreen';

const Stack =
  createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Products"
          component={ProductsScreen}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
        />

        <Stack.Screen
          name="Filters"
          component={FiltersScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
