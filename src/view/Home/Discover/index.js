import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import { connect } from 'react-redux'
import banner from "./../../../mock/home/banner.json"
const styles = {
    body: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    headerIcon: {
        width: 30,
        height: 30,
    },
    headerSeach: {
        flex: 1,
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: 10,

    },
    section: {
        flex: 1,
        borderColor: "red"
    },
    wrapper: {
        width: "100%",
        height: 170,
    },
    swiper: {
        flex: 1,
        backgroundColor: "#669900"
    },
    swiper1: {
        flex: 1,
        backgroundColor: "red"
    },
    swiper2: {
        flex: 1,
        backgroundColor: "#666"
    },
    text: {
        color: "red"
    }
}
const SwiperItem = ({ pic }) => <View style={{ flex: 1, overflow: 'hidden', }}><Image style={{ width: '100%', height: 170, borderRadius: 15 }} source={{ uri: pic }} /></View>

class Discover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banners: banner.banners
        }
    }

    render() {
        const { banners } = this.state
        return (
            <View style={styles.body}>

                <View style={styles.header}>
                    <View style={{ marginRight: 15, }}>
                        <Image style={styles.headerIcon} source={require('../../../static/img/voiceTube.png')}></Image>
                    </View>
                    <View style={styles.headerSeach}><Text style={{ textAlign: "center", width: '100%' }}> i 大家都在搜 </Text></View>
                    <View style={{ marginLeft: 15, }}>
                        <Image style={styles.headerIcon} source={require('../../../static/img/goMusic.png')}></Image>
                    </View>
                </View>

                <ScrollView style={styles.section}>
                    <View style={styles.wrapper}>
                        <View style={{ flex: 1 }} >
                            <Carousel
                                delay={2000}
                                style={{ width: "100%", height: 170 }}
                                autoplay
                                bullets={true}
                                onAnimateNextPage={(p) => console.log(p)}
                            >
                                {
                                    banners.map(({ bannerId, pic }) => <SwiperItem key={bannerId} pic={pic} />)
                                }
                            </Carousel>
                        </View>
                    </View>
                    <View>
                        
                    </View>
                </ScrollView>

            </View>
        )
    }
}
export default connect(r => r)(Discover)