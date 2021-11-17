import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  const updateNews = async () => {
    //this.setState({ loading: true });
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    // this.setState({
    //   articles: parsedData.articles,
    //   totalrtotalResultsesult: parsedData.totalResults,
    //   loading: false
    // });

  }

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  //async componentDidMount() {
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=02ffd95fc5a64c1cb190edb1f52edd5b&page=1&pageSize=${props.pageSize}`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({ loading: true });
  // this.setState({
  //   articles: parsedData.articles,
  //   totalrtotalResultsesult: parsedData.totalResults,
  //   loading: false,
  // });
  //}

  const fetchMoreData = async () => {
    //this.setState({ page : page + 1 })

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    //this.setState({ loading: true });
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: articles.concat(parsedData.articles),
    //   totalrtotalResultsesult: parsedData.totalResults,
    //   loading: false
    // });

  };

  return (
    <div className="container my-3 ">
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '86px' }}>News Top - {capitalizeFirstletter(props.category)} - Headline</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container" >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 85) : ""}
                    newsUrl={element.url} imageUrl={element.urlToImage}
                    author={element.author} date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

    </div>
  );

}

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;