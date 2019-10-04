/* @flow strict-local */
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import type { Dispatch, GlobalState, Stream, Subscription } from '../types';
import { connectFlowFixMe } from '../react-redux';
import { Screen } from '../common';
import { getIsAdmin, getStreamForId, getSubscriptionForId } from '../selectors';
import MonitorStreamCard from './MonitorStreamCard';
import { WebView } from 'react-native-webview';

import styles from '../styles';

type Props = {|
  dispatch: Dispatch,
  stream: Stream,
  subscription: Subscription,
|};

class MonitorStream extends PureComponent<Props> {
  render() {
    const { stream, subscription } = this.props;
    const target1 = 'zulip';
    const target2 = 'web';
    const monuri = 'https://monbot.hopto.org:3000/d/z2yCOGpWz/docker-and-system-monitoring';
    // const monuri = `http://naver.com/${stream.stream_id}`;
    // eslint-disable-next-line no-cond-assign
    // if (stream.name === 'daum') {
    //   monuri = `https://github.com/Byeoung/${target1}`;
    // } else {
    //   monuri = `https://github.com/Byeoung/${target2}`;
    // }

    return (
      <Screen title="Monitoring">
        <MonitorStreamCard stream={stream} subscription={subscription} />
        <WebView
          source={{
            //  uri: 'https://monbot.hopto.org:3000/dashboard/snapshot/DKiRyXbKd7GM1Ru71UWvh6woYt0aE7IL',
            uri: monuri,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ marginTop: 20 }}
        />
      </Screen>

      // 스트림 아이디 전달 확인. 모니터링 2019.09.25
      //   <Screen title="Monitoring">
      //     <MonitorStreamCard stream={stream} subscription={subscription} />
      //     <Text> {stream.stream_id} 스트림아이디 </Text>
      //   </Screen>
    );
  }
}

export default connectFlowFixMe((state: GlobalState, props) => ({
  isAdmin: getIsAdmin(state),
  stream: getStreamForId(state, props.navigation.state.params.streamId),
  subscription: getSubscriptionForId(state, props.navigation.state.params.streamId),
}))(MonitorStream);
