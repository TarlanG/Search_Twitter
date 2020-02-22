import React from 'react';
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame"

function Chart(props){
// declare empty array that will contain all text data from API
  const textArr = [];
// declare empty array that will contain 20 most used words with there counts
  const result = [];
// iterate through data to store text from each tweet to the array
  for ( let status of props.text.statuses){
    textArr.push(status.text)
  };
// join all separate statuses into one string and split between each space to separate all the strings 
  const words = textArr.join().split(' ');
// array of all stopwords 
  const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he',`don't`,'via','him','his','himself','she','her','hers','via:','rt','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over',`can't`,'under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

  const remove_stopWords = (arr) => {
    const res = [], obj = {}, uniqueKeys = [];
  // iterate through the parameter to create array of strings without stopwords and extra elements from API
    for(let i=0; i<arr.length; i++) {
    // avoid stopwords with checking current string existence in stopwords array   
      if (!stopwords.includes(arr[i].toLowerCase())
        // check first index of the strings to avoid hashtags and handles  
          && /[a-zA-Z]/.test(arr[i][0]) 
          // check if the string is link
            && !arr.includes('http')
            // check length of each string to avoid digits and punctuation marks
              && arr[i].length > 1 ){
      // store all corresponding strings to res array
        res.push(arr[i])
    }
  }

  // iterate through array of corresponding strings
  for (let word of res){
    // if the word doesn't exist in obj, create key with and assign it to 1 
    if(!obj[word]){
      obj[word] = 1;
      // store all unique keys to an empty array
      uniqueKeys.push(word);
    // if the word exists in obj, increment it's value by one 
    } else obj[word] += 1
  } 
  
  // iterate through array of unique keys to sort keys in descending order by their values
  uniqueKeys.sort((a, b) => {
    let countA = obj[a];
    let countB = obj[b];
    return countB - countA 
  })
  
  // get array of 20 most used words from sorted array
  const topKeys = uniqueKeys.slice(0,20);
console.log("afafasfasfsf",topKeys)
  // iterate through array of top 20 words
  for ( let key of topKeys){
    // create key-value pair with sorted keys and their counts
    result.push({ word: key, count: obj[key]})
  }
}

// pass array of data to the function as a parameter to get object of 20 most used words and counts from tweets
remove_stopWords(words)

const frameProps = {   data: result,
  type: "bar",
  oAccessor: "word",
  rAccessor: "count",
  style: { fill: "#1c65af", stroke: "white" },
  title: "20 Most Used Words",
  axes: [{
    orient: "left",
  }],
  oLabel: true,
  oPadding: 5,
  responsiveWidth: true,
}

return(
  <div className="chart">
    <ResponsiveOrdinalFrame {...frameProps} />
  </div>    
  )
};  


export default Chart;