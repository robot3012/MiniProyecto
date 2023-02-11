function Details({ news, onBackClick }) {
    return (
      <div className="NewsDetails  text-center">
        <button onClick={onBackClick}>Back to News List</button>
        <button id='hablar'>talk</button>
        <h3 className=" text-center">{news.title}</h3>
        <p id='texto'>{news.content}</p>
        <p>{news.publishedAt}</p>
        
        {news.urlToImage && (
          <img src={news.urlToImage} alt={news.title} />
        )}
      </div>
      
    );
  }
  
  
export function Decir(){
  return(
    document.getElementById("hablar").addEventListener("click",()=>{
    speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById("texto").value));
    })
  );
  
}
  export default Details;