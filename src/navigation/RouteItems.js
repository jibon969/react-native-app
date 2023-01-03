import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    ProductListStack: 'ProductListStack',
    ProductList: 'ProductList',

    ProductDetailStack: 'ProductDetailStack',
    ProductDetail: 'ProductDetail',
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
            <Icon name="list" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.ProductList,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="list" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // ProductDetail ===========================

    {
        name: screens.ProductDetailStack,
        focusedRoute: screens.ProductDetail,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.ProductDetail,
        focusedRoute: screens.ProductDetailStack,
        title: 'ProductDetail',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    }
];