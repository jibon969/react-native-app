import {View, StyleSheet, Text} from 'react-native'
import CategoryByConcern from '../Category/ByConcern'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.contact}>
                <CategoryByConcern/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    home: {
        flex: 1,
        padding: 5,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    homeTitle: {
        textAlign: "center"
    }
});

export default Home;