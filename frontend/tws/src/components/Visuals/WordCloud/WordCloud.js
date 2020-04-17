import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';
import RWordCloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './words';

function WordCloud(props) {

const getWords = (reviewStr) => {

    //clean string before tokenize
    var str = reviewStr.replace(/[^a-zA-Z ]/g, "")
    str = str.toLowerCase();

    var flags = ['as', 'be','it','the','they','im','for','i','a','an','am','and','you',
    'dont','there','when','where','which','we','some','so','its','have','has','no',
    'but','was','were','is','are','of','my','not','if','to','just','very','or','with',
    'in','that','ive','really','me','at','on','all', 'n','this','that','these','those',
    'she','her','because','will','your'];

    var wordArr = str.split(" ")

    for(var i = 0; i < flags.length; i++){
        wordArr = wordArr.filter(e => e !== flags[i]);
    }
    // console.log('>>>>>>>>>> WORD ARR: ' + wordArr);


    //tokenize string and push count of each token to a dictionary
    var wordDict = {};
    for(var i = 0; i < wordArr.length; i++){
        if(!(wordArr[i] in wordDict)){
           wordDict[wordArr[i]] = 1;
        }
        else{
            wordDict[wordArr[i]] = wordDict[wordArr[i]] + 1;
        }
    }
    // console.log('>>>>>>>>>> WORD COUNT: ' +  JSON.stringify(wordDict));


    //create object for each token
    var words = [];
    var keys = Object.keys(wordDict);
    var values = Object.values(wordDict);
    for(var j = 0; j < keys.length; j++){
        if(values[j] > keys.length/150){
            words.push({
                text: keys[j],
                value: values[j]
            });
        }
    }
    console.log('>>>>>>>>>>JSON WORD COUNT: ' +  JSON.stringify(words));
    return words
  }

  const setWords = (words) =>{
    this.setState({
      wordObjArr: words
    });
  }

  return(
    <Resizable
        defaultSize={{
          width: 'auto',
          height: 'auto',
        }}
      >
      <Card style={styles.cloudCard}>
      <Card.Body>
          <RWordCloud words={words} style={styles.cloud} />
      </Card.Body>
      </Card>
    </Resizable>

  )
}


export default WordCloud;

const styles = {
    cloud: {
      background: '#FFFFF'
    }
};
