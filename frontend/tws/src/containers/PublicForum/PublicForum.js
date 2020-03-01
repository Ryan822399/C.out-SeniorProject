import React, {Component} from 'react';
import ForumTabs from '../../components/ForumTabs/ForumTabs';
import WordCloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import { ButtonToolbar, Row, Col, Tab, Card, Button, Accordion } from 'react-bootstrap';
import words from './words';
import ForumPosts from '../../components/ForumPosts/ForumPosts';
import ForumButton from '../../components/ForumButton/ForumButton';


export default class PublicForum extends Component {
  state = {
    currTab: "first",
    newPost: {
      title: '',
      description: ''
    }
  }

  changeTabs = tab =>  {
      this.setState({currTab: tab});
  }

render() {
    let content;
    if(this.state.currTab==="first")
    {
      content = <ForumPosts/>
    }else if (this.state.currTab==="second")
    {
      content = <ForumPosts/>
    }else if (this.state.currTab==="third")
    {
      content = <ForumPosts/>
    }else if (this.state.currTab==="forth")
    {
      content = <ForumPosts/>
    }
    return (
        <div>
          <div style={styles.forum}>
            <ForumTabs changeTabs={this.changeTabs} act={this.state.currTab}/>
          </div>
          <div style={styles.forbutton}>
            <ForumButton  post={this.state.newPost}/>
          </div>
          <Row>
            <Col >
                  <Resizable
                      defaultSize={{
                        width: 'auto',
                        height: 'auto',
                      }}
                    >
                    <Card style={styles.cloudCard}>
                    <Card.Body>
                        <WordCloud words={words} style={styles.cloud} />
                    </Card.Body>
                    </Card>
                  </Resizable>
            </Col>
            <Col>
              <Accordion  defaultActiveKey="0">
                  <Card style={styles.contentCard}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Popular Forum Questions This Month
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {content}
                    </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Recent Forum Questions
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
              </Accordion>
            </Col>
          </Row>
        </div>
    );
  }
}

const styles = {
    forum: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cloud: {
      background: '#FFFFF'
    },
    forbutton: {
        display: 'flex',
        justifyContent: 'center'
    }
};
