import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor from News component")
        this.state={
            articles:[],
            loading: false,
            page:1,

        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=1pageSize=6";
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(data);
        this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
    }

    handlePreviousClick = async ()=>{
        console.log("Prevoius");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=${this.state.page - 1} &pageSize=6`;
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(data);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick= async ()=>{
        console.log("Next");
        if(this.state.page +1 > Math.ceil(this.state.totalResults/6)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c7c848b6451e43d7a4ac129edcc6c642&page=${this.state.page + 1}&pageSize=6`;
        let data = await fetch(url);
        let parsedData =await data.json()
        console.log(data);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1
        })
    }
    }
    render() {

    return (
        <div className="conatiner my-3">
            <h1 className="text-center">NewsApp- Top HeadLines</h1>
            
            <div className="row">
            {this.state.articles.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem  
                title={element.title?element.title:""} 
                description ={element.description?element.description:""}
                imageUrl={element.urlToImage} 
                newsUrl={element.url}/>
            </div> 
            })}
            </div>
            <div className="container d-flex justify-content-between" >
                <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/6)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
    }
}

export default News