import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';
import { 
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends PureComponent {

  render() {
    const { list, page, getLoadMore } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'./detail/' + item.get('id')}>
                <ListItem>
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => {getLoadMore(page)}}>更多文字</LoadMore>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getLoadMore: (page) => {
      dispatch(actionCreator.getLoadMore(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (List)