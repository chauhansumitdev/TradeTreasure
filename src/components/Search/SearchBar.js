import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Function to fetch results from the server
    const fetchResults = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual endpoint to fetch results from the server
        const response = await fetch(`your-api-endpoint?search=${searchTerm}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    // Fetch results only if searchTerm is not empty
    if (searchTerm.trim() !== '') {
      fetchResults();
    } else {
      setResults([]); // Clear results if searchTerm is empty
    }
  }, [searchTerm]);

  return (
    <div className='searchcss'>
      <div>
      <input
        className='textincss'
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch style={{ fontSize: '20px', marginLeft: '10px'}} />
      </div>
      {results.length === 0 ? (
        <div className='noresults'>
          <p>No results found.</p>
          
        </div>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
            // Customize based on the structure of your server response
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
