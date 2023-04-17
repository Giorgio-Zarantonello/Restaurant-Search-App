import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
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
    }, []);

    return [searchApi , results , errorMessage];
}