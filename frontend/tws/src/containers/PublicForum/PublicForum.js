import React, {Component} from 'react';
import ForumTabs from '../../components/ForumTabs/ForumTabs';

import { withCookies } from 'react-cookie';
import { Spinner, ButtonToolbar, Row, Col, Tab, Card, Button, Accordion } from 'react-bootstrap';

import ForumPosts from '../../components/ForumPosts/ForumPosts';
import ForumButton from '../../components/ForumButton/ForumButton';

class PublicForum extends Component {

  state = {
    currTab: "flex",
    title: '',
    description: '',
    category: 'flex',
    currForPost: null,
    comDescription: '',
    flexposts: [],
    dietposts: [],
    cardioposts: [],
    weightposts: [],
    allposts: [],
    allflexposts: [],
    alldietposts: [],
    allcardioposts: [],
    allweightposts: [],
    filter: true,
    token: this.props.cookies.get('tws-token')

  }

  componentDidMount() {
      fetch(`${process.env.REACT_APP_API_URL}/api/top3flexforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({flexposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3dietforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({dietposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3cardioforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({cardioposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3weightforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({weightposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/forumposts/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({allposts: res}))
      .catch( error => console.log(error))
      console.log("checking posts")
      console.log(this.state.allposts)

  }

  changeTabs = tab =>  {
      this.setState({currTab: tab});
  }

  updateTitle = title =>  {
      this.setState({
        title: title
      });
  }

  updateDesc = desc =>  {
    this.setState({
        description: desc
    });
  }

  updateCat = event => {
    this.setState({
      category: event.target.name
    });
  }

  updateCommDesc = event => {

     this.setState({
      comDescription: event.target.value
     });
  }
  updateCommId = id => {
    this.setState({
      currForPost: id
    });
  }

  filterPosts = () => {
      let x;
      for (x of this.state.allposts) {
        if(x.category === "flex") {

          this.state.allflexposts.push(x);
        }else if (x.category === "diet"){
          this.state.alldietposts.push(x);
        }else if (x.category === "cardio") {
          this.state.allcardioposts.push(x);
        }else {
          this.state.allweightposts.push(x);
        }
      }
      this.setState({filter: false})

  }

  formSubmitted = () => {
      let currDate = new Date()
      let month = currDate.getMonth() + 1;
      let year = currDate.getFullYear();
      let fullDate = year + "-" + month + "-" + currDate.getDate()
      let postBody = {
        title: this.state.title,
        caption: this.state.description,
        user: this.props.cookies.get('tws-id'),
        category: this.state.category,
        date: fullDate
      }

      fetch(`${process.env.REACT_APP_API_URL}/api/forumposts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.state.token}`
        },
        body: JSON.stringify(postBody)
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch( error => console.log(error))


  }
  commentFormSubmitted = () => {
    let currDate = new Date()
    let month = currDate.getMonth() + 1;
    let year = currDate.getFullYear();
    let fullDate = year + "-" + month + "-" + currDate.getDate()
    console.log("printing Data", fullDate)
    let postBody = {
      description: this.state.comDescription,
      user: this.props.cookies.get('tws-id'),
      forumPost: this.state.currForPost,
      date: fullDate
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/comment/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`
      },
      body: JSON.stringify(postBody)
    }).then( resp => resp.json())
    .then( res => console.log(res))
    .catch( error => console.log(error))

  }

render() {

  if(this.state.allposts[0] && this.state.filter){
    this.filterPosts();
  }

    let content;
    let allcontent;
    if(this.state.currTab==="flex")
    {
      content = this.state.flexposts
      allcontent = this.state.allflexposts
    }else if (this.state.currTab==="diet")
    {
      content = this.state.dietposts
      allcontent = this.state.alldietposts
    }else if (this.state.currTab==="cardio")
    {
      content = this.state.cardioposts
      allcontent = this.state.allcardioposts
    }else if (this.state.currTab==="weight")
    {
      content = this.state.weightposts
      allcontent = this.state.allweightposts
    }

    return (
        <div>
          <div style={styles.forum}>
            <ForumTabs
            changeTabs={this.changeTabs} act={this.state.currTab}/>
          </div>
          <div style={styles.forbutton}>
            <ForumButton  formSubmitted={this.formSubmitted}
            updateDesc={this.updateDesc}
            updateTitle={this.updateTitle}
            post={this.state.newPost}
            updateCat={this.updateCat}
            />
          </div>


              <Accordion  defaultActiveKey="0">
                  <Card style={styles.contentCard}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Popular Forum Questions This Month
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    { ((this.state.flexposts[0] && this.state.currTab==="flex")
                    || (this.state.dietposts[0] && this.state.currTab==="diet")
                    || (this.state.currTab==="cardio" && this.state.cardioposts[0])
                    || (this.state.currTab==="weight"&& this.state.weightposts[0]))
                       ? <ForumPosts  currForPost={this.state.currForPost}
                                commentFormSubmitted={this.commentFormSubmitted}
                                updateCommId={this.updateCommId}
                                updateCommDesc={this.updateCommDesc}
                                forumposts={content}/>
                          :  <div style={styles.spinners}> <Spinner  animation="border" variant="success" /> </div>
                    }
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
                      <Card.Body>
                      { ((this.state.allflexposts[0] && this.state.currTab==="flex")
                      || (this.state.alldietposts[0] && this.state.currTab==="diet")
                      || (this.state.currTab==="cardio" && this.state.allcardioposts[0])
                      || (this.state.currTab==="weight"&& this.state.allweightposts[0]))
                         ? <ForumPosts  currForPost={this.state.currForPost}
                                  commentFormSubmitted={this.commentFormSubmitted}
                                  updateCommId={this.updateCommId}
                                  updateCommDesc={this.updateCommDesc}
                                  forumposts={allcontent}/>
                            :  <div style={styles.spinners}> <Spinner  animation="border" variant="success" /> </div>
                      }

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
              </Accordion>


        </div>
    );
  }
}

export default withCookies(PublicForum);

const styles = {
    forum: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    forbutton: {
        display: 'flex',
        justifyContent: 'center'
    },
    spinners: {
      display: "flex",
      justifyContent: "center"
    }
};
