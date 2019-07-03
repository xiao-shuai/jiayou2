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
import { theme } from '../qjstyle';
import {Top} from '../compont/compont'
import {Button} from 'react-native-elements'
import {NavigationActions} from 'react-navigation'
class Meinfo extends Component{
    constructor(props){
      super(props)
      this.state={

      }
    }

   render(){
       const sometab=[
           {
               n:'My Order',
               go:'Dingdan'
           },
           {
            n:'Feedback',
            go:'Faak'
        },
         {
            n:'About',
            go:'Guanyuwm'
         },
        

       ]
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <View style={{flex:1,width:'100%',backgroundColor:theme.theme_bg}}>
                   <Top title='Personal center'/>
                 <View style={styles.t_v}>
              <Image source={require('../img/geren.png')} style={{
                  width:theme.sc_w*.25,height:theme.sc_w*.25,
              }} resizeMode={'contain'}/>
              <View style={{marginLeft:'10%'}}>
              <Text style={styles.text}>Personal information</Text>   
               <Text style={[styles.text,{marginTop:5}]}>name : Sam</Text> 
              </View>
                 </View>
                 {/*  */}
                 {
                     sometab.map((i,k)=>{
                     
                        return(
                            <TouchableOpacity style={{
                                width:'100%',padding:20,backgroundColor:'white',
                                marginTop:k==0?15:2
                            }} onPress={()=>{
                                this.props.navigation.navigate(i.go)
                            }}>
                             <Text style={{fontSize:theme.sc_w*.05,color:theme.themehui2}}>{i.n}</Text>
                            </TouchableOpacity>
                        )
                      
                     })
                 }
              
              <Button  title='log out' buttonStyle={{marginTop:15,backgroundColor:theme.theme_Color}}
                onPress={()=>{
                    AsyncStorage.removeItem('ss')
                    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Lg' })], 0)
                }}
              />

               </View>
           </SafeAreaView>
       )
   }

}

export default Meinfo
const styles=StyleSheet.create({
    t_v:{
        backgroundColor:'white',
        width:'100%',padding:10,marginTop:3,
        flexDirection:'row',alignItems:'center'
    },
    text:{
        fontSize:18,color:theme.themehui2,fontWeight:'500'
    }
})