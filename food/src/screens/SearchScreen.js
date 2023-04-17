import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({ navigation }) => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults('');

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'  
    return results.filter(results => {
      return results.price === price;
    })
  };

  return (
    // we don t have anything wrapping the intern , now i can scroll the view without a wrapper , not harming the layout 
    <>
      <SearchBar
        searchTerm={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        errorMessage
          ? <Text>{errorMessage}</Text>
          : null
      }
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation} />
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

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