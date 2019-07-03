
    
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
import {observer,inject} from 'mobx-react';
import {theme} from '../qjstyle'
import {NavigationActions} from 'react-navigation'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons'
import {Top,Top2} from '../compont/compont'

@inject('lData')
@observer
class Luinfo extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             date2:"",
        }
      
        this.tab=[
             {
               left:'name',
             },
             {
              left:'phone',
            },
            {
              left:'company',
            },
            {
              left:'address',
           },
        ]

    }
    timm=()=>{
        const date = new Date();
        const fyear = date.getFullYear().toString();
        const fmonth = (date.getMonth()+1).toString();
        const fday = date.getDate().toString();
        const aaafinal=fyear+'-'+fmonth+'-'+fday
        this.setState({date:aaafinal,date2:aaafinal})
      } 

     

      

      
  componentWillMount(){
    
  }
     
     

     componentDidMount(){
    
      AsyncStorage.getItem('ss').then(res=>{
        console.log('res:',res)
        if(res==null){
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Lg' })], 0)
        }
       
      }).catch(err=>{
        console.log('err:',err)
        
      })
         this.timm()
      }
      componentWillMount(){
        
      }

      sbsbsb=()=>{
      if(this.state.nnm==undefined){

          return this.refs.toast.show('Please enter the name',1000)

      }else if(this.state.pph==undefined){

          return this.refs.toast.show('Please enter the phone',1000)
      }else if(this.state.cpp==undefined){
         return this.refs.toast.show('Please enter the company',1000) 
      }else if(this.state.ddz==undefined){
        return  this.refs.toast.show('Please enter the address',1000)
       }

  
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/psuhdata',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})

      let ssd={
        xxm:this.state.nnm,
        ddh:this.state.pph,
        ddz:this.state.ddz,
        ggs:this.state.cpp,
        start:this.state.date,
        end:this.state.date2
      }
      this.props.lData.oook(ssd)
      this.props.navigation.navigate('Dingdan')
     

  }

  render(){
    
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',backgroundColor:theme.theme_bg}}>
         <View style={styles.topbig}>
          {/* <Button icon={<Icon name={'ios-menu'} size={25} color='white' />} type='clear'/> */}
          <Button title='Meet' type='clear' titleStyle={{
            color:'white',fontSize:theme.sc_w*.06,fontWeight:'500'
          }}/> 
          {/* <Button icon={<Icon name={'ios-megaphone'} size={25} color='white' />} type='clear'  /> */}
         </View>
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
          
          
           <View style={styles.text_v}>
             <Text style={styles.text_left}>name</Text>
             <Input  
             onChangeText={(nnm)=>{
              this.setState({nnm})
          }}
             containerStyle={styles.text_con}
             multiline={true}
             inputContainerStyle={styles.text_in_con}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <View style={styles.text_v}>
             <Text style={styles.text_left}>phone</Text>
             <Input  
             onChangeText={(pph)=>{
              this.setState({pph})
          }}
             containerStyle={styles.text_con}
             multiline={true}
             inputContainerStyle={styles.text_in_con}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <View style={styles.text_v}>
             <Text style={styles.text_left}>company</Text>
             <Input  
             onChangeText={(cpp)=>{
              this.setState({cpp})
          }}
             containerStyle={styles.text_con}
             multiline={true}
             inputContainerStyle={styles.text_in_con}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <View style={styles.text_v}>
             <Text style={styles.text_left}>address</Text>
             <Input  
             onChangeText={(ddz)=>{
              this.setState({ddz})
          }}
             containerStyle={styles.text_con}
             multiline={true}
             inputContainerStyle={styles.text_in_con}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>
           


          <View style={styles.text_v}>
             <Text style={styles.text_left}>start</Text>
          
         <DatePicker
        style={[styles.text_con,{borderWidth:0}]}
        
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

           </View>

           <View style={styles.text_v}>
             <Text style={styles.text_left}>end</Text>
          
         <DatePicker
        style={[styles.text_con,{borderWidth:0}]}
        
        date={this.state.date2}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date2}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />

           </View>
    
           <View style={styles.text_v}>
             <Text style={styles.text_left}>reason</Text>
             <Input  
             placeholder='optional'
             containerStyle={styles.text_con}
             multiline={true}
             inputContainerStyle={styles.text_in_con}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <Button    buttonStyle={styles.bat} title={'submit'} 
               onPress={()=>{
                 this.sbsbsb()
               }}
           />
        
          </KeyboardAwareScrollView>
          
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
export default Luinfo

const styles=StyleSheet.create({
  bat:{
    width:theme.sc_w*.95,
    // height:theme.sc_h*.05,
    marginTop:20,
    marginBottom:10,backgroundColor:theme.theme_Color
  },
  text_in_con:{
    borderBottomColor:'white',borderBottomWidth:0
  },
  text_con:{
    width:theme.sc_w*.7,
    backgroundColor:theme.theme_hui,borderRadius:5
  },
  text_left:{
     fontSize:theme.sc_w*.05,color:theme.theme_Color
  },
     text_v:{
      width:theme.sc_w,flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'white',
      padding:10,marginTop:5
     },
 
     topbig:{
      width:theme.sc_w,
      height:theme.sc_h*.1,
      backgroundColor:theme.theme_Color,
      // flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      // padding:10
     }

})

