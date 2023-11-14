import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=RLT1ov5YDqHOxR8BeCkSJ0AYhM3c5mtr')
      .then((response) => {
        const newNews = response.data.results.map((item) => {
          // Check if 'item.media' and 'item.media[0]['media-metadata']' are defined before accessing properties
          const media = item.media && item.media[0] && item.media[0]['media-metadata'];
          const mediaUrl = media ? media[0].url : ''; // Provide a default value if 'media' or 'media[0]['media-metadata']' is undefined
          
          return {
            title: item.title,
            abstract: item.abstract,
            url: item.url,
            byline: item.byline,
            published_date: item.published_date,
            media: mediaUrl,
          };
        });
        setNews(newNews);
        console.log(newNews);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  return (
    <div className="main">
      {news.map((item) => (
        <Card
          key={item.url}
          img={item.media}
          title={item.title}
          abstract={item.abstract}
          published_date={item.published_date}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default App;
