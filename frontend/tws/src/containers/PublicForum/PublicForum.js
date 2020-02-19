import React, {Component} from 'react';


import WordCloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './words';

const styles = {
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
            style={styles}>
            <div style={{ width: '100%', height: '100%' }}>
              <WordCloud words={words} />
            </div>
        </Resizable>
      </div>
  );
}

}
