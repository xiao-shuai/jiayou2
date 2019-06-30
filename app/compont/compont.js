import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView
} from 'react-native'
import {theme} from '../qjstyle'
import PropTypes from 'prop-types'
 class Top extends Component{

  static propTypes={
      width:PropTypes.number,
      height:PropTypes.number,
      bgc:PropTypes.string||PropTypes.number,
      title:PropTypes.string,
  }
  static defaultProps={
      width:'100%',
      height:theme.sc_h*.1,
      bgc:theme.theme_Color,
      title:'ww',

  }


render(){
    const {width,height,bgc,title}=this.props
    return(
        <View style={{
        width:width,
        height:height,
        backgroundColor:bgc,
        alignItems:'center',
        justifyContent:'center'
        }}>
        <Text style={{}}>{title}</Text>
        </View>
    )
}

}

class Top2 extends Component{

    // static propTypes={
    //     width:PropTypes.number,
    //     height:PropTypes.number,
    //     bgc:PropTypes.string||PropTypes.number,
    //     title:PropTypes.string,
    // }
    // static defaultProps={
    //     width:'100%',
    //     height:theme.sc_h*.1,
    //     bgc:theme.theme_Color,
    //     title:'ww',
  
    // }
  
    click=()=>{
        alert('66')
    }
  render(){
      

     
     const {cs,click}=this.props
      return(
          <View style={{
          width:'100%',
          height:theme.sc_h*.1,
          backgroundColor:'gold',
          alignItems:'center',
          justifyContent:'center',
          marginTop:10
          }}>
          <Text style={{}}>{cs}</Text>
          </View>
      )
  }
  
  }

export {
    Top,Top2
}