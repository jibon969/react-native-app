import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProductListScreen from '../../screens/ProductListScreen'

const Stack = createStackNavigator();


const ProductListStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="ProductListScreen" component={ProductListScreen}/>
        </Stack.Navigator>
    )
};

export default ProductListStackNavigator