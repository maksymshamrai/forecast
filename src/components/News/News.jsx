import { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const NEWS_API = "3f3a21722bbe49e88d56cea7cf4dab93";

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything",
        {
          params: {
            q: "technology", // можна змінити тему
            language: "en",
            sortBy: "publishedAt",
            apiKey: NEWS_API,
          },
        }
      );

      setNews(response.data.articles.slice(0, 4));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="news-container">
      <h2>Latest News</h2>

      <div className="news">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img
              src={
                item.urlToImage ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={item.title}
            />
            <h3>{item.title}</h3>
          </div>
        ))}
        
      </div>
      <div className="btn-container">
        <button className="more-news-btn">See more</button>
      </div>
      
    </div>
  );
};

export default News;