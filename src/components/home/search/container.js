import { connect } from 'react-redux';
import { updateSearch } from 'actions';
import Search from './component';

const mapStateToProps = state => ({
	search: state.search,
});

const mapDispatchToProps = dispatch => ({
	onChange: search => dispatch(updateSearch(search)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
