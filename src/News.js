import React, { Component } from "react";
import Newslist from "./Newslist";
import PropTypes from 'prop-types'


export default class News extends Component {

  // default Props will intialize the coming props from News.js to default Value. Always used with static
  static defaultProps={
    country:"in",
    category:"general",
  }
  // propTypes used to check the data type of prop is same as defined or not
  static propTypes={
    country: PropTypes.string,
    category:PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading:false,
      page:1,
      totalResults:null,
    };
  }
 
  handlePrev = async () => {
    const { page } = this.state;
    if (page > 1) {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&language=en&apiKey=${this.props.apiKey}&page=${
          page - 1
        }&pageSize=12`
      );
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: page - 1,
      });
    }
  };

  handleNext = async () => {
    const { page, totalResults } = this.state;
    const pageSize = 12;
    const totalPages = Math.ceil(totalResults / pageSize);

    if (page + 1 <= totalPages) {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&language=en&apiKey=${this.props.apiKey}&page=${
          page + 1
        }&pageSize=${pageSize}`
      );
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: page + 1,
      });
    }
  };
  
  async componentDidMount(){
    let data=await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&language=en&apiKey=${this.props.apiKey}&page=1&pageSize=12`)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
  }
  render() {
    const { articles,page,totalResults } = this.state;
  
    return (
      <div className="container">
        <h2 className="my-2">Today's Headlines:-</h2>
        <div className="row">
          {articles && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4 my-4" key={element.url}>
                <Newslist
                  title={element.title ? element.title.slice(0, 20) : "https://www.dsij.in/Portals/0/EasyDNNnews/31418/image_272.jpg"}
                  Newsdesc={element.description ? element.description.slice(0, 40) : " "}
                  imageUrl={element.urlToImage ? element.urlToImage : "SAMPLE EXAMPLE"}
                  url={element.url ? element.url : " "}
                />
              </div>
            ))
          ) : (
            <p>No News found.</p>
          )}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalResults / 12)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
  }
       
