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
import {SearchBar,Input,Button} from 'react-native-elements'
import { theme } from './qjstyle';
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Faak extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    tttj=()=>{
        if(this.state.ff==undefined){
            return this.refs.toast.show('Please enter content',1000)
        }
        this.refs.toast.show('Thanks for your feedback! We will fix it as soon as possible',1000)
    }
    render(){
        
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={styles.vi}>
             <Input containerStyle={styles.fb_con} 
             inputContainerStyle={styles.fb_in}
             inputStyle={{
                 width:'100%',
                 height:'100%',
                 marginTop:5
             }}
              multiline={true}
              onChangeText={(ff)=>{
                this.setState({ff})
              }}
             />
               
            <Button title='submit' buttonStyle={styles.ann}
              onPress={()=>{
                  this.tttj()
              }}
            />
                </View>
                <Toast
       ref="toast"
       position='top'
       
       opacity={0.8}
       />
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
    vi:{
        backgroundColor:theme.theme_bg,flex:1,
        width:'100%',alignItems:'center'
    },
    ann:{
        width:theme.sc_w*.95,marginTop:15,backgroundColor:theme.theme_Color
    },
    fb_in:{
        borderBottomWidth:0,width:'100%',height:'100%',marginTop:5
    },
   fb_con:{
    width:theme.sc_w*.95,
    height:theme.sc_h*.25,
    backgroundColor:'white',
    marginTop:10,borderRadius:8
   }
})