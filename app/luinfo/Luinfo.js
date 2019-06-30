
    
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
// import {observer,inject} from 'mobx-react';
import {theme} from '../qjstyle'
// import {NavigationActions} from 'react-navigation'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons'
import {Top,Top2} from '../compont/compont'
// @inject('allData')
// @observer
class Luinfo extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             date2:"",
        }
    }
    dottoday=()=>{
        const date = new Date();
        
        const fyear = date.getFullYear().toString();
        const fmonth = (date.getMonth()+1).toString();
        const fday = date.getDate().toString();
        const aaafinal=fyear+'-'+fmonth+'-'+fday
        this.setState({date:aaafinal,date2:aaafinal})
      } 

      fetchLatestData() {
        this.setState({
          refreshing: true
        });
        this.fetchData(0).then(movieList => {
          this.setState({
            movieList,
            hasMore: movieList.length != 0,
            refreshing: false
          });
        });
      }

      

      

     
     

     componentDidMount(){
         this.dottoday()
      }
      componentWillMount(){
        // AsyncStorage.getItem('qqq').then(res=>{
        //   // console.log('sds',res)
        //  if(res==null) {
        //   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'LLogin' })], 0)
        //  }
              
        // }
        // ).catch(err=>{
        //   console.log('weeer',err)

        // })
      }

  ttt=()=>{
      if(this.state.nm==undefined){

          return this.refs.toast.show('Please enter the name',1000)

      }else if(this.state.ph==undefined){

          return this.refs.toast.show('Please enter the phone',1000)
      }else if(this.state.ad==undefined){
       return  this.refs.toast.show('Please enter the address',1000)
      }else if(this.state.com==undefined){
         return this.refs.toast.show('Please enter the company',1000) 
      }

  
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/psuhdata',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})

      let hjh={
         nm:this.state.nm,
         ph:this.state.ph,
         ad:this.state.ad,
         com:this.state.com,
         start:this.state.date,
         end:this.state.date2
      }
      // this.props.allData.save_home_list(hjh)
      this.props.navigation.navigate('OrderList')
    
      

  }

  render(){
      // console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',backgroundColor:theme.theme_bg}}>
         <View style={styles.topbig}>
          <Button icon={<Icon name={'ios-menu'} size={25} color='white' />} type='clear'/>
          <Button title='book' type='clear' titleStyle={{
            color:'white',fontSize:theme.sc_w*.06,fontWeight:'500'
          }}/> 
          <Button icon={<Icon name={'ios-megaphone'} size={25} color='white' />} type='clear'  />
         </View>
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>

         {/* <Input label={'name'} containerStyle={{marginTop:20}} 
             labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(nm)=>{
            this.setState({nm})
           }}
         />
         <Input label={'phone'} containerStyle={{marginTop:20}} 
         labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter phone'}
           onChangeText={(ph)=>{
            this.setState({ph})
           }}
         />
          <Input label={'address'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter address'}
           onChangeText={(ad)=>{
             this.setState({ad})
           }}
         />
          <Input label={'company'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(com)=>{
               this.setState({com})
           }}
         />
          <View style={{marginTop:20,marginLeft:10,width:yangs.wd*.95}}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>start Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%'}}
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
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
          </View>

          <View style={{marginTop:20,marginLeft:10,borderBottomColor:yangs.themehui2,
          borderBottomWidth:1,width:yangs.wd*.95
          }}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>end Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%',marginBottom:10}}
        date={this.state.date2}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date2}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />
          </View>
          <Input label={'note'} containerStyle={{marginTop:20}} 
           placeholder={'optional'}
         />
         <Button  title={'submit'} buttonStyle={{
              width:yangs.wd*.95,marginTop:20,bottom:10
          }} onPress={()=>{this.ttt()}}/> */}
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
 
     topbig:{
      width:theme.sc_w,height:theme.sc_h*.1,
      backgroundColor:theme.theme_Color,flexDirection:'row',
      justifyContent:'space-between',alignItems:'center',padding:10
     }

})

