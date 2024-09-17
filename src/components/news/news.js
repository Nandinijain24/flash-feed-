import React, { useEffect,useState } from 'react'
import "./News.css"
const News=() =>{
  
const [mynews, setNews] = useState([]);
const fetchData = async()=>{
let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=08d5cda76cb84d149f916a9ae546d706")
let data =await response.json();
setNews(data.articles)
}
console.log(mynews);
   useEffect(()=>{
    fetchData();
   },[])

  return (
    <>

<div className='mainDiv'>
    {mynews.map((ele)=>{
        console.log(ele)
        return (
          <>

<div className="card" style={{width: "200px",height:"400px",marginLeft:"7.2rem",marginTop:"2rem"}}>
  <img src={ele.urlToImage == null ? "https://i.insider.com/66966a7a5439fb59cebdb04b?width=1200&format=jpeg": ele.urlToImage} class="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{ele.author}</h5>
    <p className="card-text">
      {
        ele.title
      }
    </p>
    <a href={ele.url} target="_blank"class='btn btn-primary'>
   read more
    </a>
  </div>
</div>


          </>

        )
      }

      )
    }
</div>
      </>
  )
  
}

export default News;
