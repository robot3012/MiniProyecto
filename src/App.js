
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './components/body-new/Details';
import Body from './components/body-new/Body';
import Decir from  './components/body-new/Details';

import Header from './components/header/Header';

const NewsAPI = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=430e748f85e24368ace6fe90a6d724ad';

function App() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    axios.get(NewsAPI)
      .then(res => {
        setNews(res.data.articles);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const handleBackClick = () => {
    setSelectedNews(null);
  };

  return (
    
    <div className="App">
      <div className="sticky-top">
        <Header/>
      </div>
      
      <div className="container flex">

      
        {selectedNews ? (
          <Details 
            news={selectedNews}
            onBackClick={handleBackClick}
          />
        ) : (
          <Body 
          
            news={news}
            onNewsClick={handleNewsClick}
            
        />
        
      )}
      
      </div>
    </div>
  );
};
export default App;
