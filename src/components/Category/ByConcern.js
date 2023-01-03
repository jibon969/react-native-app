import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyle} from "../styles";
import axios from "axios/index";
import {BASE_URL} from "../../api/api";
import Loader from '../../components/Loader/Loader'

const ByConcern = ({navigation}) => {

    const [concern, setConcern] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getByConcern = async () => {
            const res = await axios.get(`${BASE_URL}/api/concern-categories/`);
            setConcern(res.data);
            setIsLoading(false);
        };
        getByConcern()
    }, []);


    if (isLoading) {
        return (
            <View>
                <Loader/>
            </View>
        )
    }

    return (
        <View style={globalStyle.container}>
            {
                concern.map((item, index) => (
                    <View style={globalStyle.card} key={index}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductListStack', {
                            screen: 'ProductList',
                            params: {query: `solution/${item.slug}`}
                        })}>
                            <View style={globalStyle.cardContent}>
                                <Image source={{uri: item.image}} style={globalStyle.cardImage}/>
                                <Text style={globalStyle.cardTitle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
    );
};

export default ByConcern;