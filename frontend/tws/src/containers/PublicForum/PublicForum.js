import React, {Component} from 'react';
//import WordCloudWrapper from '../../components/Visuals/WordCloud/WordCloudWrapper';


import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './words';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FFFFF',
};

export default class PublicForum extends Component {


render() {
  return (
    <div>
      <p>Word Cloud</p>
      <Resizable
        defaultSize={{
          width: 900,
          height: 500,
        }}
        style={resizeStyle}>
        <div style={{ width: '100%', height: '100%' }}>
          <ReactWordcloud words={words} />
        </div>
      </Resizable>
    </div>
  );
}



}
