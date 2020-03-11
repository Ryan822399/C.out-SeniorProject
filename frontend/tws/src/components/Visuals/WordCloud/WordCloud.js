import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';
import RWordCloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './words';

function WordCloud(props) {
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
