/* @flow strict-local */

import React, { PureComponent } from 'react';

import type { Dispatch, Narrow, Stream } from '../types';
import { connect } from '../react-redux';
import { getStreams } from '../selectors';
import NavButton from '../nav/NavButton';
import { navigateToRtMonitor } from '../nav/navActions';

type Props = {|
  dispatch: Dispatch,
  narrow: Narrow,
  color: string,
  streams: Stream[],
|};

// 모니터링 버튼 URL생성 및 전달 필요 2019.09.25

class MonitorNavButtonStream extends PureComponent<Props> {
  handlePress = () => {
    const { dispatch, narrow, streams } = this.props;
    const stream = streams.find(x => x.name === narrow[0].operand);
    if (stream) {
      dispatch(navigateToRtMonitor(stream.stream_id));
    }
  };

  render() {
    const { color } = this.props;

    return <NavButton name="info" color={color} onPress={this.handlePress} />;
  }
}

export default connect((state, props) => ({
  streams: getStreams(state),
}))(MonitorNavButtonStream);
