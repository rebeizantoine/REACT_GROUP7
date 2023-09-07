const handleSearch = () => {
    // Replace this with your actual search logic
    console.log('Performing a search for:', searchQuery);
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=d2bd3c547542a17e77dbb6faed609687`);`)
       .then(response => response.json())
       .then(data => {
     Handle the search results
      })
    .catch(error => {
             console.error('Error:', error);
   });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your city..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search