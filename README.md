# izyRTM

[![Build Status](https://travis-ci.org/zulip/zulip-mobile.svg?branch=master)](https://travis-ci.org/zulip/zulip-mobile)
[![Zulip chat](https://img.shields.io/badge/zulip-join_chat-brightgreen.svg)](https://chat.zulip.org/#narrow/stream/mobile)

izyrtm 은 zulip 사용하였으며, android환경에서 제공됩니다.

# How to Use Monbot Mobile APP

izyrtm-chat(Mobile)는 chat 개설 및 등록된 RTM으로부터 자동으로 알림을 받을 수 있는 APP입니다.
  ![APP](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-rtm.png) 
  ![APP](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-grafana.png)

## Git
  * [izyrtm-mobile](https://github.com/izyrtm/izyrtm-mobile)

## Get the app
you can [download an
    APK](https://github.com/izyrtm/izyrtm-mobile/releases)
    from the official build we post on GitHub.


## Starter
  1. APK를 다운로드 받습니다. [download an APK](https://github.com/izyrtm/izyrtm-mobile/releases) 
   ![Welcome](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-welcome.png)

  2. 우리의 URL을 입력하여 chat에 입장합니다.
     Oraganication URL "https://monbot.org" --> Enter  
    ![intro](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-intro.png)

  3. 로그인 인증하여 참여 합니다.
     (Log in with passwork)    
     ![Log in](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-loginintro.png)

  4. APP 내에서 Stream / Group을 생성은 가능하지만 수정 및 삭제는 이곳에서 [monbot web](https://monbot.hopto.org/#) 가능합니다.


## Function
 APP에서는 chat과 실시간 Monitering까지 다양한 기능들을 제공하고 있습니다.

### Stream(chat)
 1. 내가 포함된 이미 개설된 Chat과 개별 대화 및 stream을 개별로 만들어 사용가능 
    합니다. 
   ![Main](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-main.png)

 #### Subscribed
 1. 현재 나의 계정으로 포함된 대화창으로 public, private 대화창이 보이며 클릭하여 대화창 참여가 가능합니다.  
   ![Subscribed](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-subscribed.png)

 2. 개별의 stream에 sub stream이 각각 생성 가능하며, sub stream은 
   [monbot web](https://monbot.hopto.org/#) 웹사이트에서만 생성이 가능하고 APP 내에서는 Main Stream만 만들 수 있습니다.

 3. 개설된 stream의 경우 [monbot web](https://monbot.hopto.org/#) 웹사이트에서만 삭제 및 수정이 가능합니다.
  
 ##### sub stream
  1. 하나의 stream에 "이상징후" / "문제알림" 과 같은 sub의 stream이   생겨납니다.
   ![sub stream](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-substream.png)

  2. sub stream 별로 이곳에서 [cms web](http://monbot.org:8088/main)  설정한 실시간 모니터링 화면 및 연결된 RTM에서 자동으로 방이 생성됩니다. 
     * [How to Use CMS Site](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/howto/izyrtm-cms(Website).md)

  3. Sub Stream에서 **Monitering의 실시간 스크린 샷**을 받아 볼 수 있습니다.
     ![APP](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-rtm.png)

  4. **Dashboard Monitering Site를 APP 내에서 실시간으로 확인 가능합니다.**
   ![APP](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-grafana.png)

 #### All streams
  1. APP 내에서 Create new stream을 통해 새로운 stream을 만들 수 있습니다.
  2. 방 참여에 대한 제어를 버튼을 통해 할 수 있습니다.
  3. 생성 후 Subscribed에 생성되며, chat에 참여 후 참여 인원을 추가하여 대화할 수 있습니다.
     
### Group
 1. 참여한 리스트 중 stream에 포함시킬 나만의 Group을 만들 수 있습니다.
   ![Group](https://github.com/izyrtm/izyrtm-cms-server/blob/master/docs/image/monbotApp/monbot-app-group.png)

## Zulip ReadME
  * [zulip-readme](https://github.com/izyrtm/izyrtm-mobile/blob/master/README_zulip.md)
  
## License

Copyright (c) 2016-2018 Kandra Labs, Inc., and contributors, and 2016 Dropbox, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

The software includes some works released by third parties under other
free and open source licenses. Those works are redistributed under the
license terms under which the works were received.
