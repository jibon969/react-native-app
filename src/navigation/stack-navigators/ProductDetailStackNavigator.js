import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProductDetailScreen from '../../screens/ProductDetailScreen'

const Stack = createStackNavigator();


const ProductDetailStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="About" component={ProductDetailScreen}/>
        </Stack.Navigator>
    )
};

export default ProductDetailStackNavigator