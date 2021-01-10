/**
 *
 * SearchPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import 'font-awesome/css/font-awesome.min.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import 'react-multi-carousel/lib/styles.css';
import VideoItem from '../../components/VideoItem';
import { changeSearchTerm, loadSearchMovies } from './actions';
// eslint-disable-next-line import/order
import styled from 'styled-components';
import VideoList from '../../components/VideoList';
import { makeSelectMovies, makeSelectTerm } from './selectors';

const PaddingDiv = styled.div`
  padding: 0 23px !important;
`;

class SearchPage extends React.PureComponent {
  componentDidMount() {
    document.getElementById('term').value = '';
    this.props.onChangeTerm({ target: { value: '' } });
  }

  returnCarouselData(videos) {
    let moviesDiv = null;
    if (videos && videos.results) {
      moviesDiv = videos.results ? (
        videos.results.map((video, index) => (
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
    }
    return moviesDiv;
  }

  render() {
    const { term, onChangeTerm } = this.props;
    return (
      <div className="d-flex flex-column">
        <div className="p-2">
          <Link
            className="text-right float-left mr-3"
            style={{ fontSize: '20px' }}
            to="/"
          >
            <i className="fa fa-arrow-left" aria-hidden="true" /> Back to
            dashboard
          </Link>
        </div>
        <div className="d-flex p-5 flex-column justify-content-center">
          <div className="d-flex border w-50 p-2 m-auto">
            <input
              placeholder="Type movie name"
              id="term"
              className="form-control w-100 form-control-sm h-auto"
              type="search"
              value={term}
              onChange={onChangeTerm}
              results="0"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>
          <h5 className="m-auto pt-3 w-25 text-center border-bottom">
            Search results
          </h5>
          <PaddingDiv className="pl-1 pb-3 pr-1 pt-4">
            <div>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.props.movies}
              />{' '}
            </div>
          </PaddingDiv>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  term: PropTypes.string,
  movies: PropTypes.object,
  onChangeTerm: PropTypes.func,
  onVideoSelect: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeTerm: e => {
      dispatch(changeSearchTerm(e.target.value));
      dispatch(loadSearchMovies());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  term: makeSelectTerm(),
  movies: makeSelectMovies(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'searchPage', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchPage);
