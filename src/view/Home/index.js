
import Discover from './discover';
import Friend from './Friend';
import My from './My';
import Video from './Video';
import User from './User';

export let TabRouter ={
    Discover,
    Friend,
    My,
    Video,
    User
}


export var routerList =  [
    {
        key: Discover,
        title: "发现",
        component: Discover
    }, {
        key: Friend,
        title: "朋友",
        component: Friend
    },
    {
        key: My,
        title: "我的",
        component: My
    },
    {
        key: Video,
        title: "视频",
        component: Video
    },
    {
        key: User,
        title: "账号",
        component: User
    }
]
