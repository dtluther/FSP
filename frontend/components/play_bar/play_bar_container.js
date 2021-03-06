import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlayBar from './play_bar';
import { playPauseSong, stepBackward, stepForward, resetTrackWasSelected } from '../../actions/now_playing_actions';

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playPauseSong: () => dispatch(playPauseSong()),
    stepBackward: () => dispatch(stepBackward()),
    stepForward: () => dispatch(stepForward()),
    resetTrackWasSelected: () => dispatch(resetTrackWasSelected()),

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBar));
