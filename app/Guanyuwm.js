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
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';
import {Button} from 'react-native-elements'

export default class Guanyuwm extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }

    render(){
        
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:theme.theme_bg,flex:1,width:'100%'}}>
                <View style={{width:theme.sc_w,height:theme.sc_h*.25,
                    backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
             <Image source={require('../app/img/sssss.png')} style={{
                 width:theme.sc_w*.3,height:theme.sc_w*.3
             }}/>
              <Text style={{color:theme.themehui2,marginTop:2}}>v1.0</Text>
                </View>

                <View style={{marginTop:20,backgroundColor:'white',height:theme.sc_h*.8,padding:10}}>
                    <Text style={{marginTop:10,fontSize:17,lineHeight:25,color:theme.themehui2}}>
                    Our APP is mainly used for company business visits. Users can make an appointment to visit in advance, so that we can arrange time reasonably and improve work efficiency
                    </Text>
                </View>
         
                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({

})