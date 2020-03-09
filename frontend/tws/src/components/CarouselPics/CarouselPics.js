import React, {useState} from 'react';
import { Carousel  } from 'react-bootstrap';
import EditProfile from '../EditProfile/EditProfile';

function CarouselPics(props) {
  console.log("POSTS");
  console.log(props.posts);

  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color: "#1BFFFF"}}>First slide</h3>
          <p>Testing this thing out.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color: "#1BFFFF"}}>Second slide</h3>
          <p>How are you doing?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color: "#1BFFFF"}}>Third slide</h3>
          <p>Hello</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );

}

export default CarouselPics;
