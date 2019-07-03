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
    RefreshControl,Alert
} from 'react-native'
import {SearchBar} from 'react-native-elements'
import { theme } from '../qjstyle';
import {Top} from '../compont/compont' 
class Chainfo extends Component{
    constructor(props){
      super(props)
      this.state={
        refreshing:true
      }
    }


   

  cha_shua_info=()=>{
      this.setState({refreshing:true})
      fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/ssddd')
      .then(res=>res.json())
      .then(res=>{
          console.log('red',res)
          Alert.alert('prompt','No record',[{'text':'ok',onPress:()=>{}}])
         this.setState({refreshing:false})
      })
      .catch(err=>{

      })
  }
  componentWillMount(){
      
  }
  componentDidMount(){
    this.cha_shua_info()
  }


   render(){
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <View style={{flex:1,width:'100%', backgroundColor:theme.theme_bg}}>
             <Top title='Reservation inquiry'/>
         <SearchBar  
        value={this.state.text}
        returnKeyType={'search'}
        onSubmitEditing={()=>{
          console.log('ddddf')
          this.cha_shua_info()
        }}
        onChangeText={(text)=>{
            this.setState({text})
        }}
         
          containerStyle={{
             backgroundColor:theme.theme_Color,borderWidth:0,
         }} inputContainerStyle={{backgroundColor:'white'}}/>


         <View style={{flexDirection:'row',justifyContent:'space-between',
             backgroundColor:'white',width:'100%',marginTop:3,padding:10}}>
                <Text style={yys.text}>
                name
                </Text> 

                <Text style={yys.text}>
                time
                </Text>
                <Text style={yys.text}>
                  state
                </Text>
            </View> 

         <ScrollView refreshControl={
         <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.cha_shua_info}
            title='Is refreshing'

          />} contentContainerStyle={{alignItems:'center',flex:1}}>
            
           <View style={{width:theme.sc_w*.95,flex:1,
            backgroundColor:'white',marginTop:10}}>
          <View style={{}}>

          </View>
          </View> 

         </ScrollView>

               </View>
          
           </SafeAreaView>
       )
   }

}

export default Chainfo

const yys=StyleSheet.create({
    text:{
        fontSize:theme.sc_w*.05,fontWeight:'500',color:theme.themehui2
    }
})