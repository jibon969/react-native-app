import * as React from 'react'
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    ProductListStack: 'ProductListStack',
    ProductList: 'ProductList',

    ProductDetailStack: 'ProductDetailStack',
    ProductDetail: 'ProductDetail',

    CartStack: 'CartStack',
    Cart: 'Cart',
};

export const routes = [
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    {
        name: screens.ProductListStack,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="list" size={20} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.ProductList,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="list" size={20} color={focused ? '#551E18' : '#000'}/>,
    },

    // ProductDetail ===========================

    {
        name: screens.ProductDetailStack,
        focusedRoute: screens.ProductDetail,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="phone" size={20} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.ProductDetail,
        focusedRoute: screens.ProductDetailStack,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={20} color={focused ? '#551E18' : '#000'}/>,
    },

    // Cart ===========================
    {
        name: screens.CartStack,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="shopping-cart" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
    // Tab
    {
        name: screens.Cart,
        focusedRoute: screens.CartStack,
        title: 'Cart',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="shopping-cart" size={focused ? 20 : 20} color={focused ? 'black' : '#969696'}/>,
    },
];