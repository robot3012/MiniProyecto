function Body({ news, onNewsClick }) {
  return (
    <ul className="NewsList">
      {news.map(newsItem => (
        <li 
          key={newsItem.url} 
          onClick={() => onNewsClick(newsItem)}
        >
          <h3>{newsItem.title}</h3>
          <p>{newsItem.description}</p>
          <p>{newsItem.publishedAt}</p>
        </li>
      ))}
    </ul>
  );
}
export default Body;