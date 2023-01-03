import {useEffect, useState, useContext} from "react";
import {SafeAreaView, View, StyleSheet, Text, Platform, ScrollView, Alert, Linking} from 'react-native';
import ByConcern from '../../src/components/Category/CategoryByConcern';

const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView>
                    {/* ByConcern */}
                    <View style={styles.byConcern}>
                        <ByConcern navigation={navigation}/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
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
    hotDeals: {
        overflow: "hidden",
        padding: 3,
        marginTop: 10
    },
    hotDealsTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    byMakeup: {
        overflow: "hidden",
        padding: 1,
        marginTop: 10
    },
    byMakeupTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    bySkin: {
        overflow: "hidden",
        marginTop: 10
    },
    bySkinTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    byConcern: {
        overflow: "hidden",
        padding: 4,
        marginTop: 10
    },
    byConcernTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    }
});


export default HomeScreen;