import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'

const Newsboard = ({category}) => {

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        const fetchNews = async () => {
            try {
              let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
              const response = await fetch(url);
      
              if (!response.ok) {
                throw new Error('Failed to fetch news');
              }
      
              const data = await response.json();
              setArticles(data.articles);
            } catch (err) {
              setError(err.message);
            }
          };
      
          fetchNews();
    },[category])
    console.log(articles)

  return (
    <>
    <div style={{height:"100vh"}} >
        <h1 className='text-center my-5'>Latest <span className='badge bg-danger'>News</span></h1>

        <div className='d-flex flex-wrap justify-content-center'>

        {
            articles?.length > 0 ?
            articles.map((item,index)=>{
                return <Newsitems key={index} title={item?.title} description={item?.description} src={item?.urlToImage} url={item?.url} /> 
            })
            :
            <h4 className='text-center text-danger'>No news for now</h4>
        }
        </div>

        
    </div>
    </>
  )
}

export default Newsboard
