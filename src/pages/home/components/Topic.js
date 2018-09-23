import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  TopicWrapper,
  TopicItem,
  TopicItemMore
} from '../style';

class Topic extends PureComponent {

  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-icon'
                src={item.get('imgUrl')}
                alt=''
              />
              {item.get('title')}
            </TopicItem>
          ))
        }
        <TopicItemMore>
          更多热门专题 >
        </TopicItemMore>
      </TopicWrapper>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null) (Topic)