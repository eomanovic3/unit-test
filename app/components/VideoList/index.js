/**
 *
 * VideoList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';

class VideoList extends React.PureComponent {
  render() {
    if (this.props.videos && this.props.videos.results) {
      const renderendList = this.props.videos.results ? (
        this.props.videos.results.map((video, index) => (
          <div key={index.toString()}>
            <VideoItem
              key={video.id}
              video={video}
              onVideoSelect={this.props.onVideoSelect}
            />
          </div>
        ))
      ) : (
        <div />
      );
      return <div className="ui relaxed divided list">{renderendList}</div>;
    }
    return null;
  }
}

VideoList.propTypes = {
  videos: PropTypes.object,
  onVideoSelect: PropTypes.func,
};
export default VideoList;
