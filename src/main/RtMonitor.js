/* @flow strict-local */

import React, { PureComponent } from 'react';

import type { Dispatch, Stream } from '../types';
import { connect } from '../react-redux';
// import { Screen, OptionButton } from '../common';
// import openLink from '../utils/openLink';
// import { getFullUrl } from '../utils/url';
import { getCurrentRealm } from '../selectors';
import { WebView } from 'react-native-webview';

type Props = {|
  dispatch: Dispatch,
  realm: string,
  stream: Stream,
|};

class RtMonitor extends PureComponent<Props> {
  //   openTermsOfService = () => {
  //     const { realm } = this.props;
  //     openLink(getFullUrl('/terms/', realm));
  //   };

  //   openPrivacyPolicy = () => {
  //     const { realm } = this.props;
  //     openLink(getFullUrl('/privacy/', realm));
  //   };

  render() {
    return (
      //   (
      //     <Screen title="Legal">
      //       <OptionButton label="Terms of service" onPress={this.openTermsOfService} />
      //       <OptionButton label="Privacy policy" onPress={this.openPrivacyPolicy} />
      //     </Screen>
      //   ),
      <WebView
        source={{
          //  uri: 'https://monbot.hopto.org:3000/dashboard/snapshot/DKiRyXbKd7GM1Ru71UWvh6woYt0aE7IL',
          uri: 'http://naver.com',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default connect(state => ({
  realm: getCurrentRealm(state),
}))(RtMonitor);
