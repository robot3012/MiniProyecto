function Details({ news, onBackClick }) {
    return (
      <div className="NewsDetails">
        <button onClick={onBackClick}>Back to News List</button>
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <p>{news.publishedAt}</p>
        {news.urlToImage && (
          <img src={news.urlToImage} alt={news.title} />
        )}
      </div>
    );
  }
  

  export default Details;