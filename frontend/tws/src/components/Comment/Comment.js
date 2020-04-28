import React from 'react';
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar} from 'react-bootstrap';


function Comment(props) {
   console.log("Comment DEBUUG", props.postComments);
   return(
     <div>
           { props.postComments.map( comment => {
            return (
              <div key="temp" className="comment-item">
              <Card bg="dark" style={{ padding: '10px', border: '3px solid black', width: '40rem' }}>
                <Card.Body>
                    <Media>
                      <a href={""}>
                          <img
                            width={50}
                            height={50}
                            className="mr-3"
                            src= {"https://vignette.wikia.nocookie.net/lucifer/images/0/02/S3_promo_-_Lucifer_Morningstar.jpg/revision/latest?cb=20180529224917"}
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
