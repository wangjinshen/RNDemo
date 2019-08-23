import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
class TabIcon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let selected = this.props.focused;
        let data = {
            Discover: {
                title: "发现",
                icon: !selected ? require("../../static/img/discover.png") : require("../../static/img/actionDiscover.png")
            },
            Video: {
                title: "视频",
                icon: !selected ? require("../../static/img/video.png") : require("../../static/img/actionVideo.png")
            },
            My: {
                title: "我的",

                icon: !selected ? require("../../static/img/music.png") : require("../../static/img/actionMusic.png")
            },
            Friend: {
                title: "朋友",

                icon: !selected ? require("../../static/img/friend.png") : require("../../static/img/actionFriend.png")
            },
            User: {
                title: "账号",

                icon: !selected ? require("../../static/img/user.png") : require("../../static/img/actionUser.png")
            }
        }
        let param = data[this.props.navigation.state.key];
        return <View style={styles.tabbarContainer}>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={param.icon} />
            <Text style={[styles.tabbarItem, selected && { color: '#d81e06' }]}>{param.title}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    tabbarContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width / 5
    },
    tabbarItem: {
        marginTop: 5,
        textAlign: "center"
    }
});

export default TabIcon
