/* @flow strict-local */

import React, { PureComponent } from 'react';

import type { Dispatch } from '../types';
import { connect } from '../react-redux';
import { Screen, ViewPlaceholder, ZulipButton } from '../common';
import { navigateToRealmScreen, navigateToWelcomeHelp, navigateToWelcomeTest } from '../actions';

type Props = {|
  dispatch: Dispatch,
|};

class WelcomeScreen extends PureComponent<Props> {
  render() {
    const { dispatch } = this.props;
    return (
      <Screen title="Welcome! iZyRTM!" centerContent padding canGoBack={false}>
        <ZulipButton
          text="I have a iZyRTM account"
          onPress={() => {
            dispatch(navigateToRealmScreen(''));
          }}
        />
        <ViewPlaceholder height={20} />
        <ZulipButton
          text="I am new to iZyRTM"
          onPress={() => {
            dispatch(navigateToWelcomeHelp());
          }}
        />
        <ViewPlaceholder height={20} />
        <ZulipButton
          text="I am 테스트 zulip"
          onPress={() => {
            dispatch(navigateToWelcomeTest());
          }}
        />
      </Screen>
    );
  }
}

export default connect()(WelcomeScreen);
