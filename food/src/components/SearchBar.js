import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";


const SearchBar = ({ searchTerm, onTermChange , onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={searchTerm}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        marginBottom : 15 , 
        backgroundColor: '#BBC2C2',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        height: 35,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderColor : 'black',
        // borderWidth : 1 ,
        flex: 1,
        fontSize: 18

    },
    iconStyle: {
        fontSize: 27.5,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;