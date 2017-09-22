import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    searchState: state
  };
};

const mapDispatchToProps = dispatch => {

};

export default withRouter(connect(
  mapStateToProps,
  null
)(SearchBar));
