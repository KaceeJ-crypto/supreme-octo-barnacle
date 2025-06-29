import React, { useEffect, useState } from 'react';

export default function NewsFeed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // For demo, use static sample or fetch from a free news API (placeholder)
    const sampleNews = [
      { title: "Global Cybersecurity Alert Issued", url: "#", source: "CyberSec News" },
      { title: "Political Turmoil Sparks Cyber Threats", url: "#", source: "World News" },
      { title: "New Zero-Day Exploit Discovered", url: "#", source: "TechRadar" }
    ];
    setArticles(sampleNews);
  }, []);

  return (
    <div className="page-container">
      <h2>📰 Current Political & Cyber News</h2>
      <ul className="news-list">
        {articles.map((article, i) => (
          <li key={i}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <span className="news-source"> — {article.source}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
