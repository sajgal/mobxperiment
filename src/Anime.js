import React, { Component } from 'react';
import anime from 'animejs';
import styled from 'styled-components';

const Owl = styled.span`
  font-size: 4rem;
  cursor: pointer;
`;

class Anime extends Component {
  componentDidMount() {
    this.animateThat();
  }

  animateThat() {
    anime({
      targets: '.animateme',
      keyframes: [
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 }
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      // loop: true
    });
  }

  render() {
     return (
      <div className="animateme" onClick={this.animateThat}>
        <Owl>
          <span role="img" aria-label="owl">🦉</span>
        </Owl>
      </div>
    );
  }
}

export default Anime;