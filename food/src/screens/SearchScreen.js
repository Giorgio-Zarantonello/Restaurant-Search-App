import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async passedSearchTerm => {
    console.log('debug initial search');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          //term : term in ES6 Syntax
          term: passedSearchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    }
    catch (e) {
      setErrorMessage('Something went Wrong');
    }
  };

  // call searchApi when component is 
  // first rendered  : BAD CODE ! IT LOOPS 
  // watch FLOW IN SEARCHSCREEN COMPONENT , V1 

  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, [])




  return (
    <View>
      <SearchBar
        searchTerm={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
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