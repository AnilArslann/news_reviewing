import React from 'react';


function Card (props){
    return(
        <div className="card">
            <div className="img">
                <a href={props.url} target='_blank'><img src={props.img} alt="Avatar" /></a></div>
            
            <div className="content">
                <h2 style={{fontSize:1+'rem'}}>{props.title}</h2>
                <p style={{fontSize:0.7+'rem'}}>{props.abstract}</p> 
                <p>{props.published_date}</p>
            </div>
        </div>
    )
}

export default Card;