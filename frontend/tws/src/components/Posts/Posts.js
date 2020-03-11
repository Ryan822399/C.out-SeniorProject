import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';

function Posts(props) {
   // console.log("props profile", props.profile[2].user)
   //console.log("number", props.posts)
   //console.log("props.info", props.profile[0].userName)
   //const userFour = (props.profile.filter(({user}) => user === props.posts[0].user))[0].userName;
   //const data = props.posts;
   //const arr2 = data.filter(data => data.user === '4');
   //console.log('userFour', userFour);

  return(
    <div>
          { props.posts.map( post => {
           return (

             <div key={post.id} className="post-item">
                  <Card bg="dark" style={{ padding: '20px', border: '3px solid black', margin: 'auto', width: '40rem' }}>
                    <Card.Img variant="top" src={post.picture} />
                    <Card.Body>
                        <Card.Title>User Name: {(props.profile.filter(({user}) => user === post.user))[0].userName}</Card.Title>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.caption}</Card.Subtitle>
                        <Card.Text>
                          {post.post}
                        </Card.Text>
                        <Button variant="primary">View Profile</Button>
                    </Card.Body>
                  </Card>
                <br/>
             </div>
           )
           })}
    </div>
  )
}


export default Posts;
