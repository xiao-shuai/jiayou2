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
import { theme } from './qjstyle';
import {ButtonGroup,Input,Button} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import {NavigationActions} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Lg extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      log_go=()=>{
          if(this.state.log_zh==undefined){
              return this.refs.toast.show('Please enter the account number',1000)
  
          } else if(this.state.log_mm==undefined){
             return  this.refs.toast.show('Please enter password',1000)
  
          }
          fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/LOGINING',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
          AsyncStorage.setItem('ss','11')
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'aaasssq' })], 0)
          
      }
      zzc=()=>{
          if(this.state.zc_zh==undefined){
              return this.refs.toast.show('Please enter account number',1000)
          }else if (this.state.zc_pw==undefined){
            return this.refs.toast.show('Please enter password',1000)
          }else if (this.state.zc_pw!==this.state.zc_pw2){
              return this.refs.toast.show('Password inconsistency',1000)
          }
          fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/LOGINING',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
          AsyncStorage.setItem('ss','11')
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'aaasssq' })], 0)
      }
      
      wwwj=()=>{
      Alert.alert('prompt','If you forget your password, please contact us at 010-3765874',[{'text':'ok',onPress:()=>{}}])
      }
    render(){
        const buttons = ['Login', 'Registered']
       const { selectedIndex } = this.state
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <KeyboardAwareScrollView>
            <View style={styles.big_v}>
                <View style={{width:'100%',height:theme.sc_h*.2,
            alignItems:'center',justifyContent:'center'
            }}>
                    <Image source={require('./img/sssss.png')} style={{
                        width:theme.sc_w*.3,
                        height:theme.sc_w*.3,
                        borderRadius:theme.sc_w*.15
                    }}/>
                </View>
            <ButtonGroup
            // buttonStyle={{backgroundColor:theme.theme_Color}}
            selectedButtonStyle={{backgroundColor:theme.theme_Color}}
            
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height:theme.sc_h*.05}}
    />

    {
      selectedIndex==0?
      <View>
     <Input inputStyle={{}}
     
     containerStyle={styles.in_c} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='Please enter your account number'
     onChangeText={(log_zh)=>{
     this.setState({log_zh})
     }}

     />
     <Input inputStyle={{}}
     secureTextEntry={true}
     onChangeText={(log_mm)=>{
     this.setState({log_mm})
     }}
     containerStyle={styles.in_c} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='Please enter password'
     />
     
     <Button title='Login' buttonStyle={[{backgroundColor:theme.theme_Color,marginTop:20}]}
       onPress={()=>{
           this.log_go()
       }}
     />
     <View style={{width:theme.sc_w*.95,flexDirection:'row',justifyContent:'space-between'}}>
     <Button title='' type='clear'/>
     <Button title='Forgot password' type='clear' titleStyle={{color:theme.themehui2}} onPress={()=>{
         this.wwwj()
     }}/>
     </View>
      </View>
      :
      <View>
      <Input inputStyle={{}}
      onChangeText={(zc_zh)=>{
        this.setState({zc_zh})
      }}
      containerStyle={styles.in_c} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please enter your account number'
      />
      <Input inputStyle={{}}
      onChangeText={(zc_pw)=>{
        this.setState({zc_pw})
      }}
      containerStyle={styles.in_c} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please enter password'
      />
      <Input inputStyle={{}}
      onChangeText={(zc_pw2)=>{
          this.setState({zc_pw2})
      }}
      containerStyle={styles.in_c} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please confirm the password again'
      />
      <Button title='registered' buttonStyle={[{backgroundColor:theme.theme_Color,marginTop:20}]}
       onPress={()=>{
           this.zzc()
       }}
      />
       </View>
    }

            </View>
            </KeyboardAwareScrollView>
    <Toast
ref="toast"
position='top'
opacity={0.8}
/>
         </SafeAreaView>
        )
    }
}

export default Lg
const styles=StyleSheet.create({
    in_c:{
        width:theme.sc_w*.95,
        // height:theme.sc_h*.05,
        borderColor:theme.themehui2,borderWidth:1,borderRadius:5,marginTop:20
    },
    big_v:{
        flex:1,alignItems:'center',width:'100%',
        // backgroundColor:theme.theme_bg
    }
})