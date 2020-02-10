import React from 'react';

function Bottom (props){
  return(
    <div className="bottom">  
      <div>
        <img src={require("../assets/like_icon.png")}  alt="like_icon" className="icon" /> 
        {props.status.favorite_count > 0 ? props.status.favorite_count : false}
      </div>  
      <div >    
        <img src={require("../assets/retweet_icon.png")} alt="retweet_icon"  className="icon" /> 
        {props.status.retweet_count > 0 ? props.status.retweet_count : false}  
      </div>
    </div> 
  );
};

export default Bottom;