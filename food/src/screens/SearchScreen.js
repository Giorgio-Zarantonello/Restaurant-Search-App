import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          //term : term in ES6 Syntax
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    }
    catch (e) {
      setErrorMessage('Something went Wrong');
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {
        errorMessage ?
          <Text>{errorMessage}</Text>
          : <Text>We have found {results.length} results</Text>
      }


    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
