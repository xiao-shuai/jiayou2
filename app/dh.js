import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
 
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {
     Chainfo,
     Luinfo,
     Meinfo,
     Add,Lg,Dingdan,Guanyuwm,Faak
} from  './pages'
import {theme} from './qjstyle'

 const aaasssq=createBottomTabNavigator(
    {
        Home:Luinfo,
        Address:Chainfo,
        Add:Add,
        Me:Meinfo,
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
          
          const { routeName } = navigation.state;
           let iconName;
           if (routeName === 'Home') {
               iconName ='ios-home';
             } else if (routeName === 'Address') {
               iconName = 'ios-business';
             }else if(routeName==='Add'){
              iconName='ios-person'
             }
             else{
                 iconName='ios-person'
             }
             return  <Ionicons name={iconName} size={horizontal ? 20 : 25} 
         color={focused?theme.theme_Color:theme.theme_hui} />;
        }
       }),
       tabBarOptions: {
          activeTintColor:theme.theme_Color,
          inactiveTintColor:theme.theme_hui,
        },
      }
 )

 const loijuroute =createStackNavigator({
  aaasssq:{
        screen:aaasssq,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      
      
      // AAAbout:{
      //   screen:AAAbout, 
      //   navigationOptions:()=>({
      //       title:'About us'
      //   })
      // },
      Lg:{
        screen:Lg,
        navigationOptions:()=>({
            // title:'About us'
            header:null
        })
      },
      Dingdan:{
        screen:Dingdan,
        navigationOptions:()=>({
            title:'The order details',
            headerTintColor:theme.theme_Color
            
            // header:null
        })
      },
      Guanyuwm:{
        screen:Guanyuwm,
        navigationOptions:()=>({
            title:'About us',
            headerTintColor:theme.theme_Color
            // header:null
        })
      },
      Faak:{
        screen:Faak,
        navigationOptions:()=>({
            title:'Feedback',
            headerTintColor:theme.theme_Color
            // header:null
        })
      },
    


 })

 export default createAppContainer(loijuroute)
