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
     Meinfo
} from  './pages'
import {theme} from './qjstyle'

 const llllyyy=createBottomTabNavigator(
    {
        Home:Luinfo,
        Address:Chainfo,
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
             }else{
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
      llllyyy:{
        screen:llllyyy,
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
    //   Login:{
    //     screen:Login,
    //     navigationOptions:()=>({
    //         // title:'About us'
    //         header:null
    //     })
    //   },
    // OrderList:{
    //     screen:OrderList,
    //     navigationOptions:()=>({
    //         title:'OrderList'
            
    //     })
    //   },
      // Zhucc:{
      //   screen:Zhucc,
      //   navigationOptions:()=>({
      //       title:'registered'    
      //   })
      // },
      // LLogin:{
      //   screen:LLogin,
      //   navigationOptions:()=>({
      //       // title:'registered'  
      //       header:null  
      //   })
      // },


 })

 export default createAppContainer(loijuroute)
