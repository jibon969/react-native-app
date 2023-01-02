import {StyleSheet, SafeAreaView, View, Text} from 'react-native'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <View>
                <Text>No</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ProfileScreen;