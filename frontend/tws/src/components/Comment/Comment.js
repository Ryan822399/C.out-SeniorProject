import React from 'react';
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar} from 'react-bootstrap';


function Comment(props) {
   return(
     <div>
           { props.postComments.map( comment => {
             console.log("Comment DEBUUG", props.profileList[comment.profile]);
            return (
              <div key="temp" className="comment-item">
              <Card bg="dark" style={{ padding: '10px', border: '3px solid black', width: '30rem' }}>
                <Card.Body>
                    <Media>
                      <a href={""}>
                          <img
                            width={40}
                            height={40}
                            className="mr-3"
                            src= {props.profileList[comment.profile].picture}
                            alt="Profile Picture"
                            allign="right"
                            style={{borderRadius: 30/2}}/>

                     </a>
                     <Media.Body>
                       {comment.id}
                     </Media.Body>
                   </Media>
                   <Card.Text>
                     {comment.description}
                   </Card.Text>
                 </Card.Body>
              </Card>
              </div>
            )
            })}
     </div>
   )
 }


export default Comment;
