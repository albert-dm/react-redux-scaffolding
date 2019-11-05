import { App } from '../components/App';
import { connect } from 'react-redux';
import { StoreModel } from '../models/storeState.model'

const mapStateToProps = (state: StoreModel) => ({
  error: state.global.error,
  isLoading: state.global.isLoading,
});

export default connect(
  mapStateToProps,
)(App);
