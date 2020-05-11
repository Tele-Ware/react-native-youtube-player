var _jsxFileName="F:\\Work\\Teleware\\packages\\react-native-youtube-player\\src\\mobile\\ProgressBar.tsx";import React,{useRef}from"react";import{StyleSheet,View}from"react-native";import Animated,{Easing}from"react-native-reanimated";import Slider from"@react-native-community/slider";export default(function(_ref){var value=_ref.value,visible=_ref.visible,seekTo=_ref.seekTo,duration=_ref.duration,pauseVideo=_ref.pauseVideo,playVideo=_ref.playVideo,fullScreen=_ref.fullScreen;return React.createElement(View,{style:[styles.container,{bottom:fullScreen?20:0}],__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:3}},React.createElement(Progress,{progress:value,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:5}}),visible&&React.createElement(Slider,{style:[styles.progress,{zIndex:99,elevation:99}],minimumValue:0,onSlidingStart:pauseVideo,onSlidingComplete:function onSlidingComplete(p){seekTo(p*duration);playVideo();},maximumValue:1,minimumTrackTintColor:"red",maximumTrackTintColor:"#FFF",value:value,thumbImage:require("./icons/thumb.png"),__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:7}}));});var Progress=function Progress(_ref2){var progress=_ref2.progress;var ref=useRef(new Animated.Value(0));Animated.timing(ref.current,{toValue:progress,duration:250,easing:Easing.inOut(Easing.ease)}).start();return React.createElement(View,{style:styles.outerBar,__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:5}},React.createElement(Animated.View,{style:{flex:ref.current,backgroundColor:"red",height:2},__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:7}}));};var styles=StyleSheet.create({container:{alignSelf:"center",width:"100%",height:2,position:"absolute",bottom:0},progress:{width:"100%",height:8,position:"absolute",bottom:0,backgroundColor:"transparent",transform:[{translateY:3}]},outerBar:{flex:1,height:2,alignItems:"flex-end",flexDirection:"row",backgroundColor:"#FFF",width:"100%"}});
//# sourceMappingURL=ProgressBar.js.map