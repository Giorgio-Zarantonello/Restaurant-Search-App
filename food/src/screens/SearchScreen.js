import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults('');

  return (
    <View>
      <SearchBar
        searchTerm={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        errorMessage
          ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text> 
      <ResultsList />
      <ResultsList />
      <ResultsList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;


/**
 * 
 * FLOW IN SEARCHSCREEN COMPONENT , V1 
 * 
 * SearchScreen function called 
 * Nothing visible on screen 
 * user enters a search term , submits it , request to Yelp is made 
 * Get search results , call setter 
 * Updated state causes component to render 
 * we have now something to show to the user 
 * 
 */