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
    SafeAreaView,
    RefreshControl
} from 'react-native'
import {SearchBar} from 'react-native-elements'
import { theme } from './qjstyle';
import {Top} from './compont/compont' 
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';
import {Button} from 'react-native-elements'
import {observer,inject} from 'mobx-react';
@inject('lData')
@observer
export default class Dingdan extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
componentDidMount(){
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/lllst')
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
}
    render(){
        // console.log('33',this.props.lData.aa)
        const list=this.props.lData.aaList
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:theme.theme_bg,flex:1,width:'100%'}}>
               
                 <ScrollView contentContainerStyle={{
                     alignItems:'center',flex:1
                 }}>
                     {
                         list.map((i,k)=>{
                          return(
                            <View style={styles.wz}>
                            <Text style={styles.wz2}>phone : {i.ddh} </Text>
                            <Text style={styles.wz2}>company : {i.ggs} </Text>
                            <Text style={styles.wz2}>address : {i.ddz} </Text>
                            <Text style={styles.wz2}>name : {i.xxm} </Text>
                            <Text style={styles.wz2}>start : {i.start} </Text>
                            <Text style={styles.wz2}>end : {i.end} </Text>
                         </View>
                          )
                         })
                     }


                 </ScrollView>

                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
     wz:{
        width:theme.sc_w*.95,
        backgroundColor:'white',
       padding:10,marginTop:20,borderRadius:8,
       shadowColor:theme.theme_Color,
       shadowOffset:{width:2,height:2},
       shadowOpacity:.8,
       shadowRadius:8
     },
     wz2:{
        fontSize:theme.sc_w*.05,color:theme.themehui2,marginTop:5
     }
})