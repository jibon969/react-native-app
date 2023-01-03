import {StyleSheet, SafeAreaView} from 'react-native'
import ProductList from '../components/ProductList/ProductList'

const ProductListScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <ProductList navigation={navigation}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ProductListScreen;