/**
 * Created by HULL on 2017/5/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {navReduce} from '../action/navAction';
var Width=Dimensions.get('window').width;
var Height=Dimensions.get('window').height;

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {navReduce}=this.props;
        return (
            <View style={styles.content}>
                <ScrollView horizontal={true} onScroll={(i) => {this.ImageScroll(i)}}  pagingEnabled={true}>
                    <Image style={styles.imageStyle} source={require('./img/1.jpeg')}/>
                    <Image style={styles.imageStyle} source={require('./img/2.jpeg')}/>
                </ScrollView>
                <View style={styles.circleStyle}>
                    <View style={[styles.circle,{right:10,backgroundColor:navReduce.navTab==1?'rgba(255, 255, 255, 0.5)':'rgba(255, 255, 255, 0)'}]}/>
                    <View style={[styles.circle,{backgroundColor:navReduce.navTab==2?'rgba(255, 255, 255, 0.5)':'rgba(255, 255, 255, 0)'}]}/>
                </View>
            </View>
        );
    }

    ImageScroll(i){
        const {dispatch} =this.props;
        if(i.nativeEvent.contentOffset.x<200){
            dispatch(navReduce(1));
        }else{
            dispatch(navReduce(2));
        }
    }
}
/**
 * 界面样式
 */
var styles = StyleSheet.create({
    content:{
        width:Width,
        height:Height
    },
    imageStyle:{
        width:Width,
        height:Height
    },
    circleStyle:{
        alignSelf:'center',
        flexDirection: 'row',
        position:'absolute',
        bottom:Height-(Height-52),
        left:(Width-42)/2
    },
    circle:{
        width:16,
        height:16,
        borderColor:'rgba(255, 255, 255, 0.5)',
        borderWidth:1,
        borderRadius:8
    }
});
function mapStateToProps(state) {
    const {navReduce} = state;
    return {
        navReduce
    }
}

export default connect(mapStateToProps)(HomeScreen);