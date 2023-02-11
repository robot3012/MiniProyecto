import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../item/Item";
import PropTypes from "prop-types";

import Nullimage from "../../img/nullimage.png";


import { endpointPath } from "../../api/Api";
import { header } from "../header/ConfigNavbar";


function New(props) {
  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [totalResults, setTotalResults] = useState(0);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(props.country, props.category, page, props.pageSize));
      // setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      // setLoading(false);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const response = await axios.get(endpointPath(props.country, props.category, page + 1, props.pageSize));
    setPage(page + 1);
    const parsedData = response.data;
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="text-center">
        <strong>{header(capitaLize(props.category))}</strong>
      </div>
      
      <div
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div />}
      >
        <div className="container">
          <div className="row row-cols-auto justify-content-center w-100">
            {articles.map((element) => {
              return (
                <div 
                  
                  key={element.url}
                >
                  <Item
                    title={element.title}
                    description={element.description}
                    author={element.author}
                    date={element.publishedAt}
                    channel={element.source.name}
                    alt="Card image"
                    publishedAt={element.publishedAt}
                    imageUrl={
                      element.urlToImage === null
                        ? Nullimage
                        : element.urlToImage
                    }
                    urlNews={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

New.defaultProps = {
  country: "mx",
  pageSize: 7,
  category: "general",
};
New.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default New;