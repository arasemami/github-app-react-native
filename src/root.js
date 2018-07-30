import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation' // Version can be specified in package.json
import SplashScreen from 'react-native-splash-screen'


import Splash from './splash'
import DetailsScreen from './components/Details'



const RootStack = createStackNavigator(
  {
    Splash: Splash,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Splash',
  }
);


export default  class Root extends React.Component {


  componentDidMount() {
    if (Platform.OS !== 'ios') SplashScreen.hide()
    console.disableYellowBox = true
  }

  render() {
    return (
    
       // <Splash />

       <RootStack />
 

    )
  }
}

  
