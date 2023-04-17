import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return (
        <View>
            < Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={
                    (result) =>
                        // i take the id from the json for the key 
                        result.id
                }
                renderItem={
                    ({ item }) => {
                        return <ResultsDetail result={item} />;
                    }
                }

            />
            <Text> Results : {results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList; 