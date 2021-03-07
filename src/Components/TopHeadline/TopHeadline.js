import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
        const [articles, setArticles] = useState([]);
        useEffect( () =>{
            const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=da9c6e7854264429a4937e49dcc37a97';
            fetch(url)
            .then (res => res.json())
            .then( data => {
                // console.log(data.articles);
                setArticles(data.articles)
            })
        },[])

        return (
            <div>
                <h2>Top Headlines: {articles.length}</h2>
                {
                    articles.map(article => <News article={article}></News>)
                    
                }
            </div>
        );
};

export default TopHeadline;