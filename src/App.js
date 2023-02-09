import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './components/Details';
import Body from './components/Body';
import Header from './components/Header';

const NewsAPI = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4473d0b599484c6d8d1cb81d5401e31f';

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
      <Header/>
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
  );
};
export default App;
