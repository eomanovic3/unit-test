/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadMovies } from './actions';
import reducer from './reducer';
import saga from './saga';
import 'font-awesome/css/font-awesome.min.css';
import {
  makeSelectAllMovies,
  makeSelectDocumentaryMovies,
  makeSelectError,
  makeSelectFamilyShows,
  makeSelectLoading,
  makeSelectPopularMovies,
  makeSelectPopularTvShows,
} from './selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
import VideoItem from '../../components/VideoItem';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/order
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getMovies();
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
    if (this.props.loading) {
      return <LoadingIndicator />;
    }
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <div className="d-flex flex-column">
          <h3 className="pl-3 pb-1 pt-2 border-bottom">
            <b>eMMovie</b>
            <Link
              className="text-right float-right mr-3"
              style={{ fontSize: '20px' }}
              to="/search"
            >
              Search <i className="fa fa-arrow-right" aria-hidden="true" />
            </Link>
          </h3>
          <h5 className="pb-1 pt-2 pr-3 pl-3 border-bottom">Popular movies</h5>
          <Carousel
            partialVisbile
            responsive={responsive}
            keyBoardControl
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect
          >
            {this.returnCarouselData(this.props.popularMovies)}
          </Carousel>
          <h5 className="pb-1 pt-4 pr-3 pl-3 border-bottom">Popular series</h5>
          <Carousel
            partialVisbile
            responsive={responsive}
            keyBoardControl
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect
          >
            {this.returnCarouselData(this.props.popularTvShows)}
          </Carousel>
          <h5 className="pb-1 pt-4 pr-3 pl-3 border-bottom">Family</h5>
          <Carousel
            partialVisbile
            responsive={responsive}
            keyBoardControl
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect
          >
            {this.returnCarouselData(this.props.familyShows)}
          </Carousel>
          <h5 className="pb-1 pt-4 pr-3 pl-3 border-bottom">Documentary</h5>
          <Carousel
            partialVisbile
            responsive={responsive}
            keyBoardControl
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            focusOnSelect
          >
            {this.returnCarouselData(this.props.documentaryMovies)}
          </Carousel>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  getMovies: PropTypes.func,
  popularMovies: PropTypes.object,
  popularTvShows: PropTypes.object,
  familyShows: PropTypes.object,
  documentaryMovies: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(loadMovies()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  allMovies: makeSelectAllMovies(),
  popularMovies: makeSelectPopularMovies(),
  popularTvShows: makeSelectPopularTvShows(),
  familyShows: makeSelectFamilyShows(),
  documentaryMovies: makeSelectDocumentaryMovies(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
