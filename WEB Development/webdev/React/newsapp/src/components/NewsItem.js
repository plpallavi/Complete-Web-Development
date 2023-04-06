import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <img src={!imageUrl?"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4153690.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}  
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ssleft:'90%', zIndex:'1'}}>
                            {source}
                        </span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown" :author} on {new Date(date).toGMTString()}</small></p>

                    <a rel ="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}
export default NewsItem 
