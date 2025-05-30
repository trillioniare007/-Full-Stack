import React, { useEffect, useState } from 'react';
import './index.css';
import Nhl from "./assets/Nhl.jpeg"
import Base from"./assets/base.jpg"
import fb from"./assets/fb.jpeg"
import bask from "./assets/jor.jpeg"
import wom from"./assets/wom.jpeg"
import col from"./assets/tex.jpeg"
import Game from './Game.jsx'




async function fetchCollegeFootballNews() {
   const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/college-football/news");
   const data = await response.json();
   return data.articles || [];
}


async function fetchNflNews() {
   const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/news");
   const data = await response.json();
   return data.articles || [];
}
async function fetchMLBNews() {
 const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news");
 const data = await response.json();
 return data.articles || [];
}
 async function fetchHOCKEYNews() {
   const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news");
   const data = await response.json();
   return data.articles || [];


}


async function fetchNBANews() {
 const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news");
 const data = await response.json();
 return data.articles || [];
}
 async function fetchWOMENNews() {
   const response = await fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news");
   const data = await response.json();
   return data.articles || [];


}



function App() {
   const [collegeNews, setCollegeNews] = useState([]);
   const [nflNews, setNflNews] = useState([]);
   const [mlbNews, setMLBNews] = useState([]);
   const [hockeyNews, setHOCKEYNews] = useState([]);
   const [nbaNews, setNBANews] = useState([]);
   const [womenNews, setWOMENNews]= useState([]);
   useEffect(() => {
       async function getData() {
           const collegeData = await fetchCollegeFootballNews();
           setCollegeNews(collegeData);
           const nflData = await fetchNflNews();
           setNflNews(nflData);
           const mlbData = await fetchMLBNews();
           setMLBNews(mlbData);
           const hockeyData = await fetchHOCKEYNews();
           setHOCKEYNews(hockeyData);
           const nbaData = await fetchNBANews();
           setNBANews(nbaData);
           const womenData = await fetchWOMENNews();
           setWOMENNews(womenData);


       }
       getData();
   },[]);


  
   return (
       <div>
        <Game />
           <h1>College Football News</h1>
           {collegeNews.length > 0 ? (
               <ul>
                   {collegeNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                   <img src ={col}/>
               </ul>
           ) : (
               <p>Loading...</p>
           )}


           <h1>NFL News</h1>
           {nflNews.length > 0 ? (
               <ul>
                   {nflNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                   <img src ={fb}/>
               </ul>
           ) : (
               <p>Loading...</p>
           )}
           <h1>MLB News</h1>
           {mlbNews.length > 0 ? (
               <ul>
                   {mlbNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                   <img src ={Base}/>
               </ul>
            ) : (
                <p>Loading...</p>
            )}
         
          <h1>HOCKEY News</h1>
           {hockeyNews.length > 0 ? (
               <ul>
                   {hockeyNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                    <img src ={Nhl}/>
               </ul>
            ) : (
                <p>Loading...</p>
            )}
           


          <h1>NBA News</h1>
           {nbaNews.length > 0 ? (
               <ul>
                   {nbaNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                    <img src ={bask}/>
               </ul>
            ) : (
                <p>Loading...</p>
            )}


          <h1>WOMEN News</h1>
           {womenNews.length > 0 ? (
               <ul>
                   {womenNews.map((article, index) => (
                       <li key={index}>
                           <a href={article.links.web.href} target="_blank" rel="noopener noreferrer">
                               {article.headline}
                           </a>
                       </li>
                   ))}
                    <img src ={wom}/>
               </ul>
            ) : (
                <p>Loading...</p>
            )}
       </div>
         
   );
 }


export default App;

