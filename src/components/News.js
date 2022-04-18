import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  articles= []

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=52febe0bc59245b6b895f69cd1015cb0";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})
}


  constructor(){
    super();
    this.state={
      articles:[]
    }
  }
  render() {
    return (
      <div className='container my-4'>
       <h1>NewsHub Top Headlines</h1>
       <div className='row my 3'>
         {this.state.articles.map((element)=>{
           return <div className='col-md-4' key={element.url}>
           <Newsitems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>
          })}
        </div>

        
       
       
       
     
      </div>
    )
  }
}

export default News
