import { App } from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.global.error,
  isLoading: state.global.isLoading,
});

export default connect(
  mapStateToProps,
)(App);
