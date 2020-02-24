import React, {Component} from 'react';
import ForumTabs from '../../components/ForumTabs/ForumTabs';
import WordCloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import { Row, Col, Tab, Card  } from 'react-bootstrap';
import words from './words';
import ForumPosts from '../../components/ForumPosts/ForumPosts';


export default class PublicForum extends Component {
  state = {
    currTab: "first"
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
        <Card>
            <div style={styles.forum}>
            <ForumTabs changeTabs={this.changeTabs} act={this.state.currTab}/>
            </div>
            <Card.Body>
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
            <Card style={styles.contentCard}>
            <Card.Body>
                {content }
            </Card.Body>
            </Card>

            </Col>
          </Row>
          </Card.Body>
          </Card>
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
      display: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFFFF'
    },
    cloudCard: {
    },
    contentCard: {
    }
};
