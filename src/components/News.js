import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const[articles,setarticles]=useState([])
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState(1)
  const[totalResults,settotalResults]=useState(0)
  


 const capitlizeText = (word) => 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}



  
  const updateNews= async ( ) => {
    props.SetProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=b5446c91c03b410ca37e1166c3cb2a0f&page=${
      page
    }&pagesize=${props.pageSize}`;
    props.SetProgress(10);
    setloading(true);
    let data = await fetch(url);
    props.SetProgress(50);
    let parseddata = await data.json();
    console.log(parseddata);
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);
    props.SetProgress(100);
  }
  useEffect(()=>{
    document.title = `${capitlizeText(props.category)} - Vamsi's News`;
    updateNews();
  },[])


  const handlePrevClick = async () => {
    setpage(page-1);
    updateNews();
  };


  const handleNextClick = async () => {
    setpage(page+1);
    updateNews();
  };



  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category
    }&apiKey=d232b1149a00467ab5a8bcc3424c9aa1&page=${page}&pagesize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults); 
  };

    return (
        <>
        <h1 className="text-center"> Top {capitlizeText(props.category)} News-Today</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container my-3">
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={
                      !element.urlToImage
                        ? "https://th.bing.com/th/id/R.855e8ca01684f0d61e302ba09a177bfd?rik=TbKuqNR1U%2bV6Iw&riu=http%3a%2f%2fwww.fremontgurdwara.org%2fwp-content%2fuploads%2f2020%2f06%2fno-image-icon-2.png&ehk=CSKwfMp5gN3Q7qhs6urcmM7WX1EHsd%2f3sCS8jJu8lRU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                        : element.urlToImage
                    }
                    url={element.url}
                    time={element.publishedAt.slice(11, 19)}
                    date={element.publishedAt.slice(0, 10)}
                    source={element.source.name}
                    author={element.author}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>
     
    );
  }
  export default News
  
