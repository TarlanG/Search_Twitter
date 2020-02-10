import React from 'react';

function Navbar (props){
  return(
    <div className="navbar">
      <img src={require("../assets/twitter_logo.png")} alt="twitter_logo" className="twitter_logo" />
      <div className="search">
        <input onChange={event => {props.changeInput(event.target.value);}} name="searchInput" placeholder="Search Twitter"></input> 
        <button onClick={props.search}>Search</button>
      </div>
      <button onClick={props.chartController} >20 Most Used Words</button>
    </div>
  );
};

export default Navbar;