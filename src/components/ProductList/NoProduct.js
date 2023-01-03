import React from 'react';
import {SafeAreaView, View, StyleSheet, Platform, Text, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';


const NoProduct = ({navigation, route}) => {

    return (
        <SafeAreaView style={styles.productListContainer}>
            <View style={styles.noProductWrap}>
                <Feather name="shopping-bag" size={150} color="#293352"/>
                <Text style={styles.noProductTitle}>No Product Found</Text>
                <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
                    <Text style={styles.productNotDataFound}>Click here to continue shopping</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
    },
    productListWrap: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },

    noProductWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    noProductTitle: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 2
    },
    productNotDataFound: {
        marginTop: 10,
        padding: 7,
        backgroundColor: "#F9C65D",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F9C65D",
        color: "#0C0C0C",
        overflow: "hidden"
    }

});

export default NoProduct;
