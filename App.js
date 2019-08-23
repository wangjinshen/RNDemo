import React, { Component } from 'react';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux'

import { StyleSheet } from 'react-native';

import Login from './src/view/login'
import Discover from './src/view/Home/Discover';
import Friend from './src/view/Home/Friend';
import My from './src/view/Home/My';
import Video from './src/view/Home/Video';
import User from './src/view/Home/User';
import TabIcon from './src/component/Icon';
import store from './src/store';
import { Provider } from "react-redux"
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f4f4f4',
    height: 64
  }
})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene hideNavBar tabBarPosition="bottom">
              <Tabs
                key="tabbar"
                swipeEnabled
                wrap={false}
                // 是否显示标签栏文字
                showLabel={false}
                tabBarStyle={styles.tabBarStyle}
              >
                <Scene
                  key="Discover"
                  component={Discover}
                  icon={TabIcon}
                  title="Discover"
                />
                <Scene
                  key="Friend"
                  component={Friend}
                  icon={TabIcon}

                  title="Friend"
                />
                <Scene
                  key="My"
                  component={My}
                  icon={TabIcon}

                  title="PageMy"
                />
                <Scene
                  key="Video"
                  component={Video}
                  icon={TabIcon}

                  title="Video"
                />
                <Scene
                  key="User"
                  component={User}
                  icon={TabIcon}

                  title="User"
                />

              </Tabs>
            </Scene>
            <Scene key="Login"
              component={Login}
              title="Login">

            </Scene>
          </Scene>
        </Router>
      </Provider>

    );
  }
}
export default App