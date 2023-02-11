import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NewsItem from "../NewsItem/NewsItem";
// import Spinner from "../Spinner/Spinner";
// import { endpointPath } from "../../api/api";
// import { header } from "../../api/configNavbar";
function Body({ news, onNewsClick }) {
  return (
    <ul className="row row-cols-auto   list-group-flush  shadow justify-content-center" >
      {news.map(newsItem => (
        <li className=" list-group-item shadow  p-4 "
          key={newsItem.url} 
          
        >
          <div className="card h-100" style={{width: "18rem"}}>
            <div className="card-body">
              <img className="w-100 h-25" src={newsItem.urlToImage}/>
              <h3 className="card-title"><strong>{newsItem.title}</strong></h3>
              <p className="card-text text-start">{newsItem.description}</p>
              <a href="#" onClick={() => onNewsClick(newsItem)}>read more</a>
              <p className="card-text" >{newsItem.publishedAt} </p>
              
            </div>
          </div>
        </li>
      ))}
    </ul>
    

    
    // <ul className=" row row-cols-3">
    //   {news.map(newsItem => (
    //     <li className="list-group-item "
    //       key={newsItem.url}
    //       onClick={() => onNewsClick(newsItem)}
    //     >
    //       <section className="latest-listings">
    //         <div className="container">
    //           <div className="row">
    //             <div className="col-md-4 col-sm-12">
    //               <div className="card mb-2" >
    //                 <img src={newsItem.urlToImage} class="card-img-top" alt="..."/>
    //                   <div className="card-body">
    //                     <h5 className="card-title"><strong>{newsItem.title}</strong></h5>
    //                     <p className="card-text">{newsItem.description}</p>
    //                     <p className="card-text">{newsItem.publishedAt}</p>
    //                   </div>
    //                   {/* <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                   </ul> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       {/* <h3>{newsItem.title}</h3>
    //       <p>{newsItem.description}</p>
    //       <p>{newsItem.publishedAt}</p> */}
    //     </li>
    //   ))}
    // </ul>
    


  );
}
export default Body;