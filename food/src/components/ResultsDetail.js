import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.constainer}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>Rating : {result.rating} ,  Stars : {result.review_count}</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    constainer: {
        marginLeft: 15,

    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom : 5 , 
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
    }
});

export default ResultsDetail;

