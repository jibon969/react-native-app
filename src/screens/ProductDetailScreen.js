import {StyleSheet, SafeAreaView} from 'react-native'
import ProductDetail from '../components/ProductDetail/ProductDetail'

const ProductDetailScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <ProductDetail/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ProductDetailScreen;