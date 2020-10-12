import React from 'react';
import styles from './PostContainer.module.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const PostContainer = () => {
    const slides = [
        { title: 'First item', description: 'Lorem ipsum'},
        { title: 'Second item', description: 'Lorem ipsum'}
      ];
    return ( 
      <div className={styles.PostContainer}>
      <Slider>
  {slides.map((slide, index) => <div key={index}>
    <h2>{slide.title}</h2>
    <div>{slide.description}</div>
  </div>)}
</Slider>
</div>
    )
}
export default PostContainer;