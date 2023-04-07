import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
//import Spinner from './spinner';
import {PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

//export class News extends Component {
    const News = (props) => {
        const [article, setArticle] = useState([])
    //  const [spinner, setSpinner] = useState([true])
        const [page, setPage] = useState(1)
        const [totalResults, setToalResults] = useState([])
    //document.title = `${this.props.category} - NewsApp`;

    // static deafaultProps={
    //     country:'in',
    //     pageSize:8,
    //     category:'general',
    // }
    // static propTypes={
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,   
    // }
    // constructor(props){
    //     super(props);
    //     // this.state={
    //     //     articles:[],
    //     //     loading: true,
    //     //     page:1,
    //     // }
    //     document.title = `${this.props.category} - NewsApp`;
    // }

    const updateNews= async() =>{
        props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=1&pageSize=${props.pageSize}`;
        //this.setState({loading: true});
        //setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData =await data.json()
        props.setProgress(50);
        //console.log(parsedData);
        setArticle(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        //setLoading(false)
        // this.setState({articles: parsedData.articles, 
        //                 totalArticles: parsedData.totalResults,
        //                 loading: false,
        //                 totalResults:0
        // })
        props.setProgress(100);
    }

    useEffect(() =>{
        document.title = `${this.props.category} - NewsApp`;
        updateNews();
    },[])

    // async componentDidMount(){
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=1&pageSize=${this.props.pageSize}`;
    //     // this.setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parsedData =await data.json()
    //     // console.log(parsedData);
    //     // this.setState({articles: parsedData.articles, 
    //     //                 totalArticles: parsedData.totalResults,
    //     //                 loading: false
    //     // })
    //     this.updateNews();
    // }

    //const handlePreviousClick = async ()=>{
        //console.log("Prevoius");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData =await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // })
        //this.setState({page:this.state.page-1});
        setPage(page-1)
        updateNews();
    //}

    //const handleNextClick= async ()=>{
        console.log("Next");
        // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData =await data.json()
        
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        // })
        //}
        //this.setState({page: this.state.page+1});
        setPage(page+1)
        updateNews()
    //}

    const fetchMoreData =async  () => {
        //this.setState({page: this.state.page+1})
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        // this.setState({loading: true});
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(parsedData);
        setArticle( article.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        // this.setState({
        //                 articles: article.concat(parsedData.articles), 
        //                 totalArticles: parsedData.totalResults,
        //                 loading: false,
        //                 totalResults:0
        // })
    };

    // render() {
    return ( 
        <>
            <h1 className="text-center" style={{margin: '35px, 0px', marginTop: '90px'}}>NewsApp- Top HeadLines from {props.category}</h1>
            {loading && <spinner/>}
            <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalResults}
            loader={<spinner/>}
            >
            <div className="container">

            <div className="row">
            {article.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  
                title={element.title?element.title:""} 
                description ={element.description?element.description:""}
                imageUrl={element.urlToImage} 
                newsUrl={element.url} author={element.author} date={element.publishedAt}
                source={element.source.name}/>
            </div> 
            })}
            </div>
            </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between" >
                <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
        </>
    )
    }
//}
News.deafaultProps={
    country:'in',
    pageSize:8,
    category:'general',
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,   
}
export default News