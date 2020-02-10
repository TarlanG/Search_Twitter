import React, { Component } from 'react';

function Tweet (props){
  return (
    <div className="tweet">
      {props.text}
    </div>
  );
}

export default Tweet;