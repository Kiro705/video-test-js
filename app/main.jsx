import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * COMPONENT
 */
class Main extends Component {

  componentDidMount () {
    document.getElementById('video0').classList.remove('hide');
    document.getElementById('video0').play();
  }

  render () {
    const sourceArr = ['https://assets.thankview.com/assets/videos/home/video_techo_2.mp4',
    'https://assets.thankview.com/assets/videos/home/video_techo.mp4',
    'https://assets.thankview.com/assets/videos/home/video_pepperdine.mp4',
    'https://assets.thankview.com/assets/videos/home/video_wartburg.mp4',
    'https://assets.thankview.com/assets/videos/home/video_vcu.mp4'];

    let index = 0;

    function nextVid(){
      document.getElementById('video'+index).classList.add('hide');
      index++;
      if(index === sourceArr.length){index = 0;}
      document.getElementById('video'+index).classList.remove('hide')
      document.getElementById('video'+index).play();
    }
    return (
      /* jshint ignore:start */
      <div>
          {
            sourceArr.map( (url,idx) => {
              return(
                <video id={'video' + idx} key={'video' + idx} className="videoBox hide" onEnded={nextVid}>
                  <source src={url} type="video/mp4" />
                </video>
              )
            })
          }
      </div>
    /* jshint ignore:end */
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {};
};

export default connect(mapState)(Main);
