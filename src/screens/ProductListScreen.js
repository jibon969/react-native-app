import React from 'react';
import {SafeAreaView, View, StyleSheet, Platform, ScrollView, Text} from 'react-native'
import ProductList from '../components/ProductList/ProductList';
import {Feather} from '@expo/vector-icons';


const ProductListScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.productListContainer}>

            <View style={styles.productListWrap}>
                <ScrollView>
                    <ProductList navigation={navigation}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );

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
    viewContainer: {
        marginHorizontal: 4,
        zIndex: 1
    },

    shortBy: {
        overflow: "hidden"
    },

    shortByTitle: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "bold"
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

export default ProductListScreen;


// import {StyleSheet, SafeAreaView} from 'react-native'
// import ProductList from '../components/ProductList/ProductList'
//
// const ProductListScreen = () => {
//     return (
//         <SafeAreaView style={styles.contactArea}>
//             <ProductList/>
//         </SafeAreaView>
//     )
// };
//
// const styles = StyleSheet.create({
//     contactArea: {
//         flex: 1,
//     }
// });
//
// export default ProductListScreen;