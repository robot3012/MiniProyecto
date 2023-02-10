function Body({ news, onNewsClick }) {
  return (
    <ul >
      {news.map(newsItem => (
        <li 
          key={newsItem.url} 
          onClick={() => onNewsClick(newsItem)}
        >
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h3 className="card-title">{newsItem.title}</h3>
              <p className="card-text">{newsItem.description}</p>
              <p className="card-text">{newsItem.publishedAt}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          
          
        </li>
      ))}
    </ul>
  );
}
export default Body;