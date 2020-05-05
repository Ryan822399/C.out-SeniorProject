import React from 'react';
import { Card, Image, Button, Row, Col} from 'react-bootstrap';

export default function ForumComments(props) {

  return(
  <div>
  { props.postComments.length > 1  ?
    ( props.postComments.map( comment => {
     return (
       <div key={comment.id}>
       <Row style={{border: "solid", borderTop: "3px #fff", borderWidth: "1px"}}>
       <Col sm={4}>
          <Row>
               <Col >

                 <Image style={{marginRight: "100px"}} src={`${process.env.REACT_APP_MEDIA_API_URL}/${comment.curr_userpicture}/`} width="15" height="15" roundedCircle fluid />
                 <span style={{marginLeft: "2px"}}> {comment.curr_username}</span>
                 </Col>

           </Row>
           <Row>
              <small className="text-muted" style={{marginLeft: "7px", fontSize: "10px"}}>Posted on {comment.date}</small>
           </Row>
          </Col>
           <Col sm={8}>
              <p style={{color: "black"}}>{comment.description}</p>
           </Col>
       </Row>
       </div>
    );})
  ) :
    <p style={{color: "black", border: "solid", borderTop: "3px #fff"}}>{props.postComments.description}</p>

  }
  </div>

  );
}
