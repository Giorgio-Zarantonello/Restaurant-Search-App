import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [Term, setTerm] = useState('');

    return (
        <View>
            <SearchBar searchTerm={Term} onSearchTermChange={newSearchTerm => setTerm(newSearchTerm)}
                onTermSubmit={() => console.log('term submitted')}

            />
            <Text>Search Screen</Text>
            <Text>{Term}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;