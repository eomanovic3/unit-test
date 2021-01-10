/**
 *
 * VideoItem
 *
 */

import React from 'react';
import './VideoItem.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import nomovie from '../../images/nomovie.jpg';

const TitleDiv = styled.div`
  width: 220px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const YearDiv = styled.div`
  width: 220px !important;
  float: left;
  color: #9f9f9f;
`;

const MovieImage = styled.img`
  width: ${props =>
    !props.noMovieImageAvailableFlag ? '300px !important' : '400px !important'};
  margin: auto;
  display: block;
  float: right;
  box-shadow: 5px 5px 5px grey;
`;

class VideoItem extends React.PureComponent {
  render() {
    const { video } = this.props;
    const date = video ? video.first_air_date || video.release_date : null;
    if (
      video &&
      (video.first_air_date !== undefined ||
        video.release_date !== undefined) &&
      (video.original_title || video.original_name || video.name)
    ) {
      return (
        <Link
          to={`/detailPage/${video.first_air_date ? 'tv' : 'movie'}/${
            video.id
          }`}
          className="video-item item shadow-lg d-flex flex-column"
        >
          <MovieImage
            className="ui image"
            alt={video.overview}
            src={
              video && video.poster_path
                ? `https://image.tmdb.org/t/p/w500${video.poster_path}`
                : nomovie
            }
            noMovieImageAvailableFlag={video && video.poster_path}
          />
          {video.original_title && (!video.original_name || !video.name) ? (
            <TitleDiv>{video.original_title}</TitleDiv>
          ) : null}
          {video.original_name && (!video.original_title || !video.name) ? (
            <TitleDiv>{video.original_name}</TitleDiv>
          ) : null}
          {video.name && (!video.original_name && !video.original_title) ? (
            <TitleDiv>{video.name}</TitleDiv>
          ) : null}

          <YearDiv>
            {date ? date.toString().split('-')[0] : 'No year available'}
          </YearDiv>
        </Link>
      );
    }
    return <div />;
  }
}

VideoItem.propTypes = {
  video: PropTypes.object,
};

export default VideoItem;
