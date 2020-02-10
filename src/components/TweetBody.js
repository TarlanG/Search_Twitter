import React from 'react';
import User from './User';
import Bottom from './Bottom';
import Tweet from './Tweet';

function TweetBody (props){
  return(
    <div className="tweet-body">
      <div className="inner-body">
        <img src={props.status.user.profile_image_url} alt="Logo" className="picture" />
        <div className="body">
            <User status={props.status} />
            <Tweet text={props.status.text} />
            <Bottom status={props.status} />        
        </div>
      </div>
    </div>
  )
}

export default TweetBody;