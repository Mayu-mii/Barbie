import React from 'react';
import '..//App.css';


class Slider extends React.Component {
  render() {
    return (
      <div class="slider">
        <img src="/slider-image.png" alt="" />
        <div className="center">
            <div class="flex dot-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Slider;