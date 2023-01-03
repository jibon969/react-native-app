import * as React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, StyleSheet, View} from 'react-native'
import {routes, screens} from './RouteItems'
import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import ProductListStackNavigator from './stack-navigators/ProductListStackNavigator'
import ProductDetailStackNavigator from './stack-navigators/ProductDetailStackNavigator'
import CartStackNavigator from './stack-navigators/CartStackNavigator'
import CheckoutStackNavigator from './stack-navigators/CheckoutStackNavigator'
import InvoiceStackNavigator from './stack-navigators/InvoiceStackNavigator'

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name); // get the route config object

    if (!item.showInTab) { // hide this tab
        return {
            tabBarButton: () => <View style={{width: 0}}/>,
            headerShown: false,
            tabBarStyle: styles.tabContainer,
            title: item.title,
        }
    }

    return {
        tabBarIcon: ({focused}) => item.icon(focused),
        tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
        ),
        headerShown: false,
        tabBarStyle: styles.tabContainer,
        title: item.title,
    }
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator}/>
            <Tab.Screen name={screens.ProductListStack} component={ProductListStackNavigator}/>
            <Tab.Screen name={screens.ProductDetailStack} component={ProductDetailStackNavigator}/>
            <Tab.Screen name={screens.CartStack} component={CartStackNavigator}/>
            <Tab.Screen name={screens.CheckoutStack} component={CheckoutStackNavigator}/>
            <Tab.Screen name={screens.InvoiceStack} component={InvoiceStackNavigator}/>
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    tabContainer: {
        height: 60,
    }
});

export default BottomTabNavigator