import React from "react";
import { View, Text, StyleSheet, FlatList , TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results , navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={
                    (result) =>
                        // i take the id from the json for the key 
                        result.id
                }
                renderItem={
                    ({ item }) => {
                        return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate ('resultShow')
                        }}>
                            <ResultsDetail result={item} /> 
                        </TouchableOpacity>
                        
                        ) 
                    }
                }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsList; 