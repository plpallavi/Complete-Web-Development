import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import spinner from './spinner';
import {PropTypes } from 'prop-types';

export class News extends Component {
    static deafaultProps={
        country:'in',
        pageSize:8,
        category:'general',
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        
    }


    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading: false,
            page:1,
        }
        document.title = `${this.props.category} - NewsApp`;
    }

    async updateNews(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, 
                        totalArticles: parsedData.totalResults,
                        loading: false
        })
    }

    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData =await data.json()
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles, 
        //                 totalArticles: parsedData.totalResults,
        //                 loading: false
        // })
        this.updateNews();
    }

    handlePreviousClick = async ()=>{
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
        this.setState({page:this.state.page-1});
        this.updateNews();
    }

    handleNextClick= async ()=>{
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
        this.setState({page: this.state.page+1});
        this.updateNews()
    }
    render() {

    return (
        <div className="conatiner my-3">
            <h1 className="text-center">NewsApp- Top HeadLines from {this.props.category}</h1>
            {this.state.loading && <spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) =>{
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
            <div className="container d-flex justify-content-between" >
                <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
    }
}

export default News