import { connect } from 'react-redux';
import { SortForm } from '../components/SortForm';
import { setFilters } from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  sort: (filters) => dispatch(setFilters(filters))
});

const SortFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortForm);

export { SortFormContainer };