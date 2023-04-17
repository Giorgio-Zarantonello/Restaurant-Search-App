import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            < Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(results) =>
                    // i take the id from the json for the key 
                    results.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
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