import Details from "./Details";
import Voice from '../voice/Voice'
function Item(props) {
    const { imageUrl, alt, description, title, author, channel, date,urlNews } = props
    return (
      
        
      
      <ul className="row row-cols-auto   list-group-flush  shadow h-100 " >
     
        <li className=" list-group-item shadow  p-4 "
       
        >
          <div className="card h-100" style={{width: "18rem"}}>
            <div className="card-body">
              <img className="w-100 h-25" src={imageUrl} alt={alt}/>
              <h3 className="card-title"><strong>{title}</strong></h3>
              <p className="card-text text-start">{description}</p>
              <Details author={author} channel={channel} date={date} />
             
                <a href={urlNews} target="_blank">Read more →</a>
                <Voice
                text={description}
                />
                
                
              
              
              
            </div>
          </div>
        </li>
      
    </ul>
    );
  }
  
  export default Item;