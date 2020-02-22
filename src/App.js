import React, { useState, useEffect } from "react";
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
import TweetBody  from './components/TweetBody';
import Navbar from './components/Navbar';
import Chart from './components/Chart'
import './app.css';

function App (){
  // state
  const [apiData, setData] = useState({ statuses: []});
  const [chart, setChart] = useState(false);
  const [inputValue, setInput] = useState('');

  // event handlers
  const changeInput = value => setInput(value);
  const chartController = () => setChart(!chart);
  const handleRefresh = () => new Promise((resolve) => getUser());
 
  const URL = "http://localhost:8080/";
  
  const getUser = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
  };

  const search = () => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({value: inputValue}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getUser()
  }, [])


  return (
    <div> 
      <Navbar changeInput={changeInput} search={search} chartController={chartController} />
      {chart ? <Chart text = {apiData} /> : false}
      {/* pull to refresh library */}
      <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={10}
        onRefresh={handleRefresh}
        triggerHeight="auto"
        backgroundColor="white" >
        <div className="container">
            <div className="label"> &#9660; Pull To Refresh &#9660; </div>
        </div>
       {/* pull to refresh library */}
        
        <div className="main-body">
          {apiData.statuses.map((status, index) => <TweetBody key = {index} status = {status} /> )}
        </div>
      </PullToRefresh>
    </div>
  )
};

export default App;

