import { connect } from 'react-redux';
import LineList from './component';

const mapStateToProps = state => ({
	lineList: state.lineList,
	search: state.search,
});

export default connect(mapStateToProps)(LineList);
