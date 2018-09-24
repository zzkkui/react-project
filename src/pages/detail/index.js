import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
	render() {
    const { title, content } = this.props
		return (
			<DetailWrapper>
				<Header>{title}</Header>
				<Content dangerouslySetInnerHTML={{__html: content}}/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail(id) {
      dispatch(actionCreator.getDetailInfo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Detail));
