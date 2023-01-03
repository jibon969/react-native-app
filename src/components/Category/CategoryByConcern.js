import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {globalStyle} from "../styles";

const CategoryByConcern = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={globalStyle.container}>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/1.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/2.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/3.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/4.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/5.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/6.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/7.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/8.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/3.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/5.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/6.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={globalStyle.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductListStack')} >
                        <View style={globalStyle.cardContent}>
                            <Image source={require('../../assets/product/7.png')} style={globalStyle.cardImage} />
                            <Text style={globalStyle.cardTitle}>Product title</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    byConcernTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    }
});

export default CategoryByConcern;