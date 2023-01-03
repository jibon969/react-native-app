import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Checkout from '../../src/components/Checkout/Checkout'


const CheckoutScreen =({navigation}) =>{

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Checkout navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden'
    },
    container: {
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


});
export default CheckoutScreen;